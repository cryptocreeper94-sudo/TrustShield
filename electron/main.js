const { app, BrowserWindow, Tray, Menu, shell, ipcMain, nativeImage } = require('electron')
const path = require('path')
const { startScanner, stopScanner, getStatus } = require('./scanner')

let tray = null
let sentinelWindow = null

function createSentinelWindow() {
  if (sentinelWindow && !sentinelWindow.isDestroyed()) {
    sentinelWindow.show()
    sentinelWindow.focus()
    return
  }

  sentinelWindow = new BrowserWindow({
    width: 420,
    height: 680,
    resizable: false,
    frame: false,
    transparent: true,
    alwaysOnTop: false,
    skipTaskbar: false,
    titleBarStyle: 'hidden',
    icon: path.join(__dirname, 'shield-icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true
    }
  })

  sentinelWindow.loadFile(path.join(__dirname, 'sentinel', 'index.html'))

  // Hide to tray on close, don't quit
  sentinelWindow.on('close', (e) => {
    e.preventDefault()
    sentinelWindow.hide()
  })
}

function createTray() {
  const iconPath = path.join(__dirname, 'shield-icon.png')
  const icon = nativeImage.createFromPath(iconPath).resize({ width: 16, height: 16 })
  tray = new Tray(icon)

  const contextMenu = Menu.buildFromTemplate([
    {
      label: '⛊  TrustShield Sentinel',
      enabled: false
    },
    { type: 'separator' },
    {
      label: '✓ Open Sentinel',
      click: () => createSentinelWindow()
    },
    {
      label: '🌐 Open Dashboard',
      click: () => shell.openExternal('https://trustshield.tech')
    },
    { type: 'separator' },
    {
      label: 'Quit TrustShield',
      click: () => {
        stopScanner()
        tray.destroy()
        app.exit(0)
      }
    }
  ])

  tray.setToolTip('⛊ TrustShield — Checking...')
  tray.setContextMenu(contextMenu)

  tray.on('click', () => createSentinelWindow())
  tray.on('double-click', () => createSentinelWindow())
}

app.whenReady().then(() => {
  app.setName('TrustShield')
  createTray()
  createSentinelWindow()

  // Start background scanner
  startScanner((status) => {
    if (tray && !tray.isDestroyed()) {
      tray.setToolTip(status.secure
        ? '⛊ TrustShield — All Systems Secure'
        : '⚠ TrustShield — Check Required')
    }
    // Push status update to sentinel window
    if (sentinelWindow && !sentinelWindow.isDestroyed()) {
      sentinelWindow.webContents.send('status-update', status)
    }
  })
})

// IPC: open external URLs
ipcMain.handle('open-external', async (event, url) => {
  await shell.openExternal(url)
})

// IPC: get current status
ipcMain.handle('get-status', () => getStatus())

// IPC: trigger manual scan
ipcMain.handle('trigger-scan', async () => {
  const { runScan } = require('./scanner')
  return await runScan()
})

// IPC: close/hide sentinel window
ipcMain.handle('hide-window', () => {
  if (sentinelWindow) sentinelWindow.hide()
})

app.on('window-all-closed', (e) => {
  // Do NOT quit when all windows are closed — stay in tray
  e.preventDefault()
})

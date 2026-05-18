const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('trustShieldAPI', {
  openExternal: (url) => ipcRenderer.invoke('open-external', url),
  openDashboard: () => ipcRenderer.invoke('open-external', 'https://trustshield.tech'),
  getStatus: () => ipcRenderer.invoke('get-status'),
  triggerScan: () => ipcRenderer.invoke('trigger-scan'),
  hideWindow: () => ipcRenderer.invoke('hide-window'),
  onStatusUpdate: (callback) => ipcRenderer.on('status-update', (event, status) => callback(status))
})

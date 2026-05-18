// TrustShield Background Scanner
// Mirrors Lume-V spec: check appHealth() every 30s
const https = require('https')

let scanInterval = null
let currentStatus = {
  secure: true,
  lastScan: null,
  hallmarksVerified: 0,
  threatLevel: 'NONE',
  cortexOnline: false,
  shieldOnline: false
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { timeout: 5000 }, (res) => {
      let data = ''
      res.on('data', chunk => data += chunk)
      res.on('end', () => {
        try { resolve(JSON.parse(data)) } catch { resolve({ ok: true }) }
      })
    })
    req.on('error', reject)
    req.on('timeout', () => { req.destroy(); reject(new Error('timeout')) })
  })
}

async function runScan() {
  const timestamp = new Date().toISOString()
  let cortexOnline = false
  let shieldOnline = false
  let hallmarksVerified = currentStatus.hallmarksVerified

  try {
    await fetchJson('https://lume-cortex.onrender.com/health')
    cortexOnline = true
  } catch (_) {}

  try {
    await fetchJson('https://trustshield.tech')
    shieldOnline = true
  } catch (_) {}

  if (cortexOnline) {
    try {
      const data = await fetchJson('https://lume-cortex.onrender.com/v1/hallmarks')
      hallmarksVerified = (data.hallmarks || []).length || hallmarksVerified
    } catch (_) {}
  }

  const secure = shieldOnline
  const threatLevel = secure ? 'NONE' : 'ELEVATED'

  currentStatus = {
    secure,
    lastScan: timestamp,
    hallmarksVerified,
    threatLevel,
    cortexOnline,
    shieldOnline
  }

  return currentStatus
}

function startScanner(onUpdate) {
  // Run immediately on start
  runScan().then(status => onUpdate && onUpdate(status))

  // Then every 30 seconds (per Lume-V spec)
  scanInterval = setInterval(async () => {
    const status = await runScan()
    if (onUpdate) onUpdate(status)
  }, 30000)
}

function stopScanner() {
  if (scanInterval) {
    clearInterval(scanInterval)
    scanInterval = null
  }
}

function getStatus() {
  return currentStatus
}

module.exports = { startScanner, stopScanner, runScan, getStatus }

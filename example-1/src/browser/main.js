import {
  app,
  BrowserWindow
} from 'electron'

import path from 'path'

const APP_DOCUMENT_PATH = path.join(__dirname, '../renderer/index.html')

let mainWindow

const createWindow = function () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    nodeIntegration: false
  })

  mainWindow.loadFile(APP_DOCUMENT_PATH)

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('active', () => {
  if (!mainWindow) {
    createWindow()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

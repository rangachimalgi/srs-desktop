const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const serve = require('electron-serve');
const loadURL = serve({ directory: 'build' });

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // The preload script where we will perform our IPC communication setup
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, // Protect against prototype pollution
      enableRemoteModule: false, // Turn off remote
      nodeIntegration: false, // Isolate the renderer process from the main process
    },
    icon: isDev() ? path.join(process.cwd(), 'public/logo512.png') : path.join(__dirname, 'build/logo512.png'),
    show: false
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:3000/');
  } else {
    loadURL(mainWindow);
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
});

app.on('activate', function () {
  if (mainWindow === null) createWindow()
});

// Setup IPC listeners for file operations
ipcMain.handle('read-receipts', async (event) => {
    const receiptsFilePath = path.join(app.getPath('userData'), 'receipts.json');
    try {
      const data = await fs.promises.readFile(receiptsFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // File does not exist, return an empty array to indicate no receipts
        return [];
      } else {
        // Other errors could be logged or handled differently
        console.error('Failed to read receipts:', error);
        throw error; // Re-throw the error to be handled by the renderer process
      }
    }
  });

ipcMain.handle('write-receipts', async (event, receipts) => {
  const receiptsFilePath = path.join(app.getPath('userData'), 'receipts.json');
  try {
    await fs.promises.writeFile(receiptsFilePath, JSON.stringify(receipts), 'utf8');
    return true;
  } catch (error) {
    console.error('Failed to write receipts:', error);
    return false;
  }
});

function isDev() {
  return !app.isPackaged;
}

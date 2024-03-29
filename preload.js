const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  readReceipts: () => ipcRenderer.invoke('read-receipts'),
  writeReceipts: (receipts) => ipcRenderer.invoke('write-receipts', receipts),
});

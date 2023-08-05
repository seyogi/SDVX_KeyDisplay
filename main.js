const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow = null;
app.on('ready', () => {
    mainWindow = new BrowserWindow({
        transparent: true,
        frame: false, 
        resizable: false,
        hasShadow: false,
        webPreferences: {
            devTools: false   // 開発者モードを表示させない
        }
    }); 
    // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});
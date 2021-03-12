import { BrowserWindow, app } from 'electron';

const mainURL = `file://${__dirname}/index.html`;
let mainWindow: BrowserWindow | null = null;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 450,
    webPreferences: { nodeIntegration: true }
  });

  mainWindow.loadURL(mainURL);

  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  app.quit();
});
app.on('activate', () => {
  if (mainWindow == null) {
    createWindow();
  }
});
import { ipcMain } from "electron";
import { cwd } from 'process'

ipcMain.handle('getPwd', async (event, arg) => {
    console.log(`[render]:${cwd()}`);
    return cwd()
})

ipcMain.on('runLocalProject', async (event, ...args) => {
    console.log(`[render]:${cwd()}`);
    return cwd()
})
import { ipcMain } from "electron";
import { cwd } from "process";
import { exec, spawn } from "child_process";
// demo 获取pwd handle 的回调 Promise
ipcMain.handle("getPwd", async (event, arg) => {
  console.log(`[render]:${cwd()}`);
  return cwd();
});

// ipcMain.on('runLocalProject', async (event, cmd) => {
//     console.log(`[render]:${cmd}`);
//     exec(cmd, {
//         encoding: 'utf8',
//     }, (err, stdout, stderr) => {
//         if(err) {
//             throw err
//         }

//         console.log(`render-run-stdout${stdout}`);
//         console.log(`render-run-stderr${stderr}`);
//     })
// })

// path: 运行命令的pwd
// cmd 需要运行的命令
ipcMain.handle("runLocalProject", async (event, path, cmd) => {
  console.log(`[render] => path: ${path}  === cmd: ${cmd}`);
  await new Promise((resolve, reject) => {
    const _cmd = spawn(cmd, [], {
      cwd: path,
      shell: true,
    });

    _cmd.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
    });

    _cmd.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    _cmd.on("close", (code) => {
      resolve(1);
      console.log(`child process exited with code ${code}`);
    });

  });
  return 'success'
  // exec(cmd, {
  //     encoding: 'utf8',
  // }, (err, stdout, stderr) => {
  //     if(err) {
  //         throw err
  //     }

  //     console.log(`render-run-stdout${stdout}`);
  //     console.log(`render-run-stderr${stderr}`);
  // })
});

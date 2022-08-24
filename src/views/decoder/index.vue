<template>
  <div>
        解码器
        <input type="file" @change="exportImgFile">
  </div>
</template>
<script lang="ts" setup>
 import { ref } from 'vue';
import { ipcRenderer  } from 'electron';
    const pwdPath = ref('')
    const imgFile = ref()
    const checkPwd = async () => {
        // 单纯发送消息
        // ipcRenderer.send('pwd', '页面内点击获取pwd')

        let pwd = await ipcRenderer.invoke('getPwd')
        console.log('[主进程发送来的]： ' + pwd);
        pwdPath.value = pwd
    }
    const isRunning = ref<boolean>(false)

    const exportImgFile = (e:any) => {
        console.log(e);
        let file = e.target.files[0];    
    }
    // const runPyJenkinsProject = () => {
    //     ipcRenderer.send('runLocalProject', `cd E:\\project\\ebidsun-jenksin-server && python main.py`)
    // }

    // const runBuildCmd = async () => {
    //     isRunning.value = true;
    //     console.log('执行中。。。')
    //     await ipcRenderer.invoke('runLocalProject', `E:\\project\\ebidsun-web-devtool`, `npm run build`)
    //     isRunning.value = false
    //     console.log("执行完毕。。。")
    // }

</script>
<style lang='less' scoped>
</style>    
<template>
  <div>
        标信
        <button @click="checkPwd">获取当前项目路径</button>
        <p>当前目录：{{ pwdPath }}</p>
        <button @click="runPyJenkinsProject"> 运行指定项目 </button>
        <button @click="runBuildCmd"> 测试运行ebidsun-web-devtool打包命令 {{ isRunning }}</button>
  </div>
</template>
<script lang="ts" setup>
 import { ref } from 'vue';
import { ipcRenderer  } from 'electron';
    const pwdPath = ref('')
    const checkPwd = async () => {
        // 单纯发送消息
        // ipcRenderer.send('pwd', '页面内点击获取pwd')

        let pwd = await ipcRenderer.invoke('getPwd')
        console.log('[主进程发送来的]： ' + pwd);
        pwdPath.value = pwd
    }
    const isRunning = ref<boolean>(false)
    const runPyJenkinsProject = () => {
        ipcRenderer.send('runLocalCmd', `cd E:\\project\\ebidsun-jenksin-server && python main.py`)
    }

    const runBuildCmd = async () => {
        isRunning.value = true;
        console.log('执行中。。。')
        await ipcRenderer.invoke('runLocalCmd', `E:\\project\\ebidsun-web-devtool`, `npm run build`)
        isRunning.value = false
        console.log("执行完毕。。。")
    }

</script>
<style lang='less' scoped>
</style>    
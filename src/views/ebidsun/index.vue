<template>
  <div>
        标信
        <button @click="checkPwd">当前项目路径</button>
        <p>当前目录：{{ pwdPath }}</p>
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
</script>
<style lang='less' scoped>
</style>    
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'assets/style/common.less'
import { createPinia } from 'pinia'
import './ipcRender/index'
const pinia = createPinia();


createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

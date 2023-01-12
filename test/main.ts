import { createApp } from 'vue'
import App from './app.vue'
// 全局引入
import HaUi from '@/index'
// 按需导入
// import { HaDemo } from '@/index'

const app = createApp(App)
app
  // .use(HaUi)
  .use(HaUi)
  .mount('#app')

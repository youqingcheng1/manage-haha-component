import { createApp } from 'vue'
import App from './app.vue'
// import miniui from '@/index'
import demo from '@/components/demo'

const app = createApp(App)
app
  .use(demo)
  .mount('#app')

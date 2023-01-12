import { createApp, Component } from 'vue'
import App from './app.vue'
import ElementPlus from 'element-plus'
import * as ElIcons from '@element-plus/icons'
import './assets/element-variables.scss'

// 全局引入
import HaUi from '@/index'
// 按需导入
// import { HaDemo } from '@/index'

const app = createApp(App)
const ElIconsObj = ElIcons as Indexable<Component<any>>
for (const name in ElIcons) {
  app.component(name, ElIconsObj[name])
}
app
  // .use(HaUi)
  .use(ElementPlus)
  .use(HaUi)
  .mount('#app')

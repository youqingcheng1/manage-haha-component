import type { App } from 'vue'
import { HaDialog } from './components/dialog'
import { HaDemo } from './components/demo'

const components: any[] = [HaDialog, HaDemo]

const install = (app:App): void => {
  components.forEach(components => app.use(components))
}

export {
  HaDialog,
  install
}

export default {
  install
}

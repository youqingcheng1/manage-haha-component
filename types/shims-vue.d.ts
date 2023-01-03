declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.json' {
  const value: any
  export default value
}

declare type Indexable<T> = {
  [key: string]: T
}
declare type IndexableN<T> = {
  [key: string | number]: T
}

declare type optionsObj = {
  value: string | number,
  label: string,
  children?: optionsObj[] // el-tree 等组件的的多层级对象
}
declare type ioptionsObj = {
  id: string,
  name: string,
  children?: ioptionsObj[] // el-tree 等组件的的多层级对象
}

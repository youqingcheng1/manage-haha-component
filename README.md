### HAHA组件库说明

基于 vue 3.0 + ts + elements plus 二次开发
```
yarn install 
```

#### 打包工具
```
rollup --输出组件
 - rollup.bundle.config 输出ts引入
 - rollup.config  输出ES模块文件组件
gulp --输出css
vite --起本地服务，测试demo
```
#### 组件规范
```
demo组件
  -- src
    - index.vue
    - style.less
    - script.ts
  -- index.ts
  -- readme.md
```
#### 组件库开发组件
test 文件夹，引入组件，测试组件demo
```
yarn dev:test
```
#### 本地组件库关联项目开发
yalc --创建软链包
```
// manage-haha-component
yarn dev -- 打包的同时，yalc push建立本地软包

// 项目
yalc link manage-haha-component

// 全局引入
import HaUi from 'manage-haha-component'
import 'manage-haha-component/lib/index.css'
app.use(HaUi)

// 按需引入
import { HaDemo } from 'manage-haha-component'
import 'manage-haha-component/lib/theme-chunk/ha-ui-demo.css'
app.use(HaDemo)

// demo使用
<HauiDemo />
```

### 组件库

基于vue 3.0 + ts + element-plus

#### 打包工具
gulp
rollup
```
rollup.bundle.config.js 输出 es
rollup.config.js 输出 components
gulpfile.js 输出 css
```

#### 项目初始化
nodemon -- 用于监听文件变化，执行npm指令
```
yarn install 
npm install -g nodemon
```

#### 本项目开发启动项目
```
vite
``` 
#### 组件库关联本地项目
yalc 作为本地包软链。yalc link 需要在yarn 之后链接
```
// 组件库
yarn dev

// 项目
yalc link XXX
```
#### 打包输出包
```
yarn build
```

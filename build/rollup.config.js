import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import VuePlugin from 'rollup-plugin-vue'
import jsonP from '@rollup/plugin-json'
import less from 'rollup-plugin-less'
import path from 'path'
import glob from 'glob'

import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const inputs = {}
const files = glob.sync('src/components/**/index.ts')
for (let file of files) {
  const com = file.split(/[/.]/)
  const name = com[com.indexOf('index') - 1 || 1]
  inputs[name] = file
}

export default Object.keys(inputs).map(name => ({
  input: path.resolve(__dirname, `../${inputs[name]}`),
  output: [
    {
      format: 'es',
      file: path.resolve(__dirname, `../lib/mui-${name}/index.js`)
    }
  ],
  plugins: [
    typescript({
      exclude: 'node_modules/**',
      typescript: require('typescript')
    }),
    VuePlugin({
      target: 'browser',
      css: false,
      exposeFilename: false
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [...DEFAULT_EXTENSIONS, '.ts']
    }),
    resolve({
      preferBuiltins: true,
      mainFields: ['browser']
    }),
    commonJs(),
    jsonP(),
    less({
      exclude: [],
      output: 'lib/index.css'
    }),
    image()
  ],
  external: ['vue', 'element-plus']
}))

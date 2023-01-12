import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import image from '@rollup/plugin-image'
import VuePlugin from 'rollup-plugin-vue'
import jsonP from '@rollup/plugin-json'
import less from 'rollup-plugin-less'

import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

const plugins = [
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
  less({ output: 'lib/index.css' }),
  image()
]

let configs = [
  {
    output: {
      dir: 'lib',
      format: 'es',
      banner: '/* eslint-disable */'
    },
    plugins: [
      typescript({
        exclude: 'node_modules/**',
        typescript: require('typescript'),
        tsconfigOverride: {
          compilerOptions: { declaration: true, emitDeclarationOnly: true },
          include: ['src/**/*', 'types/**/*']
        }
      })
    ].concat(plugins)
  },
  {
    output: {
      dir: 'lib',
      format: 'es',
      banner: '/* eslint-disable */'
    },
    plugins: [
      typescript({
        exclude: 'node_modules/**',
        typescript: require('typescript')
      })
    ].concat(plugins)
  }
]

const modules = configs.map(config => ({
  input: 'src/index.ts',
  output: config.output,
  plugins: config.plugins,
  external: ['vue', 'element-plus']
}))
export default modules

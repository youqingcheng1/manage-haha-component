import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import commonJs from '@rollup/plugin-commonjs'
import resolveNode from '@rollup/plugin-node-resolve'

export default defineConfig({
  root: path.join(__dirname, 'test'),
  plugins: [vue(), commonJs(), resolveNode()],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@test': path.resolve(__dirname, 'test')
    }
  },
  define: {
    global: {}
  }
})

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// your UI resolver
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: resolve(__dirname, './src/auto-import.d.ts'),
      resolvers: [
        // your UI Resolver
        // NaiveUiResolver()
      ]
    })
    // Components({
    //   dirs: ['src/components'],
    //   extensions: ['tsx'],
    //   include: [/\.tsx$/],
    //   dts: resolve(__dirname, './src/components.d.ts')
    //   // resolvers: [NaiveUiResolver()]
    // })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src')
      }
    ]
  }
})

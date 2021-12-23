import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [NaiveUiResolver()],
      dts: 'src/auto-import.d.ts',
      // '@vueuse/core', '@vueuse/head'
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'pinia']
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'tsx'],
      resolvers: [NaiveUiResolver()],
      include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
      dts: 'src/components.d.ts'
    }),
    // prod generator .gz files
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    }),
    viteMockServe({
      mockPath: 'mock',
      injectCode: `
        import { setupProdMockServer } from './setupProdMockServer';
        setupProdMockServer();
      `
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    // open: true,
    https: false,
    proxy: {}
  },
  build: {
    terserOptions: {
      // prod clear console debugger
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  }
})

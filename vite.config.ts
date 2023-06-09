import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/front': {
        target: loadEnv('', process.cwd()).VITE_BASE_URL,
        changeOrigin: true,
      },
      '/boss': {
        target: loadEnv('', process.cwd()).VITE_BASE_URL,
        changeOrigin: true,
      },
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(), IconsResolver()],
      // 配置后可以不用写引入vue
      imports: ['vue']
    }),
    Components({
      resolvers: [
        ElementPlusResolver(), // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        })
      ]
    }),
    // 自动引入icon
    Icons({
      autoInstall: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

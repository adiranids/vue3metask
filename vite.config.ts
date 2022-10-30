import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/composables/index.ts'),
      name: '@adiranids/vue3-metamask',
      fileName: (format) => `adiranidsvue3metamask.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        inlineDynamicImports: true,
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server:{
    port: 3030
  },
  plugins: [vue()]
})
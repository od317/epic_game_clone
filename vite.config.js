import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/epic_games_clone/',
  plugins: [vue()],
  devServer: {
    proxy: 'https://store.epicgames.com/en-US',
    }
})

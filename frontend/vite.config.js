import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import flowbite from 'flowbite-react/tailwind'
// https://vite.dev/config/
export default defineConfig({
  content: [
    // ...
    flowbite.content(),
  ],
  plugins: [
    // ...
    flowbite.plugin(),
  ],
})

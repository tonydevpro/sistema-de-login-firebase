import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "/sistema-de-login-firebase/",  // Substitua pelo nome correto
  plugins: [react()],
})

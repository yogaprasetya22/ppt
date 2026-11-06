import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '46c4-103-185-46-54.ngrok-free.app',
      '.ngrok-free.app',
    ],
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
    },
    plugins: [react()],
    base:'/lab-react-jsx-boilerplate/'

  };
});
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    build: {
      outDir: 'build',
    },
    base: '/'
  };

  if (command === 'build') {
    config.base = '/hearing-trainer-react/'; 
  }

  return config;
});
const path = require('path')
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist',
    base: '/McLearnms-Landing-Page/',
  },
  server: {
    port: 8080
  }
});
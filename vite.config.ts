/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // пример базовой конфигурации Vitest
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'], // если есть файлы настройки тестов
  }
});

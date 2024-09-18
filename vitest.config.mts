/// <reference types="vitest" />
import * as path from 'path'
import { defineConfig } from 'vitest/config'

import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'happy-dom',
        include: ['src/**/*.test.{js,ts,jsx,tsx}'],
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})

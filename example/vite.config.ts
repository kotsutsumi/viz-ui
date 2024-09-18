import { defineConfig } from 'vite'
import prism from 'vite-plugin-prismjs'

import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        TanStackRouterVite(),
        prism({
            languages: ['javascript', 'css', 'html', 'typescript', 'tsx'],
            plugins: ['line-numbers'],
            // theme: 'tomorrow',
            css: true
        })
    ]
})

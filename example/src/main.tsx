import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import 'prismjs'

import './index.css'
import 'prism-themes/themes/prism-nord.css'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)

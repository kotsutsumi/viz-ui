import { RouterProvider, createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

import './App.css'

// const memoryHistory = createMemoryHistory({
//     initialEntries: ['/'] // Pass your initial url
// })

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

function App() {
    return <RouterProvider router={router} />
}

export default App

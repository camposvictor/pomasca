import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Root } from './routes/root'
import { Settings } from './routes/settings'
import { Layout } from './routes/layout'
import { AnimatePresence } from 'framer-motion'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/pomasca/',
        element: <Root />,
      },
      {
        path: '/pomasca/settings/',
        element: <Settings />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>,
)

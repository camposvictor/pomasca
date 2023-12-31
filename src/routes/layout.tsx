import { motion } from 'framer-motion'
import { Header } from '../components/header'
import { Outlet, useLocation } from 'react-router-dom'

export function Layout() {
  const location = useLocation()
  return (
    <main className="flex h-screen justify-center bg-white px-5 py-4 font-body dark:bg-gray-900">
      <div className="w-full max-w-lg">
        <Header />
        <div className="py-2">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.5 }}
          >
            <Outlet />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

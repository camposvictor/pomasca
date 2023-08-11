import { Settings } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex w-full items-baseline justify-between border-b border-gray-300 pb-2 shadow-sm dark:border-gray-700">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
        Pomasca
      </h1>
      <div className="flex gap-4">
        <Button size="icon" variant="outline" asChild disabled>
          <Link to="/settings">
            <Settings size={18} />
          </Link>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  )
}

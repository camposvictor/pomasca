import { ThemeSwitcher } from './theme-switcher'

export function Header() {
  return (
    <header className="flex w-full items-baseline justify-between border-b border-gray-300 pb-2 shadow-sm dark:border-gray-700">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
        Pomasca
      </h1>
      <ThemeSwitcher />
    </header>
  )
}

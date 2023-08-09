import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { Theme, useTheme } from '../hooks/use-theme'

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme('light')

  function handleValueChange(value: Theme) {
    if (value) setTheme(value)
  }

  return (
    <ToggleGroup.Root
      className="relative inline-flex rounded-md bg-gray-200 p-0.5 data-[theme=light]:justify-start data-[theme=dark]:justify-end dark:bg-gray-700"
      data-theme={theme}
      type="single"
      value={theme}
      aria-label="Theme"
      onValueChange={handleValueChange}
    >
      <ToggleGroup.Item
        className="z-10 inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-500 transition hover:text-gray-900 data-[state=on]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:data-[state=on]:text-gray-50"
        value="light"
        aria-label="Light theme"
      >
        <Sun size={20} />
      </ToggleGroup.Item>
      <ToggleGroup.Item
        className="z-10 inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-500 transition hover:text-gray-900 data-[state=on]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:data-[state=on]:text-gray-50"
        value="dark"
        aria-label="Dark theme"
      >
        <Moon size={20} />
      </ToggleGroup.Item>
      <motion.div
        transition={spring}
        className="absolute h-9 w-9 rounded-md border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-900"
        layout
      />
    </ToggleGroup.Root>
  )
}
const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

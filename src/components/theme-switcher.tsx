import { Sun, Moon } from 'lucide-react'
import { Theme, useTheme } from '../hooks/use-theme'
import * as ToggleGroup from './ui/toggle-group'
import { ToggleItem } from '../@types/toggle-item'

const items: ToggleItem<Theme>[] = [
  {
    value: 'light',
    ariaLabel: 'Light theme',
    content: <Sun size={20} />,
  },
  {
    value: 'dark',
    ariaLabel: 'Dark theme',
    content: <Moon size={20} />,
  },
]

export function ThemeSwitcher() {
  const [theme, setTheme] = useTheme()

  function handleValueChange(value: Theme) {
    if (value) setTheme(value)
  }

  return (
    <ToggleGroup.Root
      type="single"
      value={theme}
      aria-label="Theme"
      onValueChange={handleValueChange}
    >
      {items.map((item) => (
        <ToggleGroup.Item
          key={item.value}
          className="h-9 w-9"
          value={item.value}
          aria-label={item.ariaLabel}
        >
          {item.content}
          {theme === item.value && (
            <ToggleGroup.Indicator id="theme-indicator" />
          )}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  )
}

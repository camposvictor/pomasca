import { Dispatch, SetStateAction, useEffect } from 'react'
import { useLocalStorage } from './use-local-storage'

export type Theme = 'light' | 'dark'

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useTheme(initialValue: Theme): [Theme, SetValue<Theme>] {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', initialValue)

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      return
    }
    document.documentElement.classList.remove('dark')
  }, [theme])

  return [theme, setTheme]
}

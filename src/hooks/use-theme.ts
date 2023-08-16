import { Dispatch, SetStateAction, useEffect } from 'react'
import { useLocalStorage } from 'usehooks-ts'

export type Theme = 'light' | 'dark'

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useTheme(): [Theme, SetValue<Theme>] {
  const initialValue: Theme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light'

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

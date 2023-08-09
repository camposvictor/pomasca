import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type SetValue<T> = Dispatch<SetStateAction<T>>

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, SetValue<T>] {
  const localStorageValue = JSON.parse(localStorage.getItem(key) as string)
  const [storedValue, setStoredValue] = useState(
    localStorageValue || initialValue,
  )

  useEffect(() => {
    if (!localStorageValue)
      localStorage.setItem(key, JSON.stringify(initialValue))
  }, [])

  const setState: SetValue<T> = (to) => {
    setStoredValue(to)
    localStorage.setItem(key, JSON.stringify(to))
  }

  return [storedValue, setState]
}

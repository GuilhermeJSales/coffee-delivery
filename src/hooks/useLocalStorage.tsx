import { useEffect, useState } from 'react'

export function useLocalStorage<T>(
  key: string,
  initial: [],
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [coffee, setCoffee] = useState<T>(() => {
    const local = localStorage.getItem(key)
    return local ? JSON.parse(local) : initial
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(coffee))
  }, [coffee, key])

  return [coffee, setCoffee]
}

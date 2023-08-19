import { useState, useEffect, useRef } from 'react'

interface CountdownParams {
  initialTime: number
  intervalMs: number
}

interface CountdownState {
  time: number
  isRunning: boolean
}

interface CountdownHelpers {
  startCountdown: () => void
  stopCountdown: () => void
  resetCountdown: () => void
}

export function useCountdown({
  initialTime,
  intervalMs,
}: CountdownParams): CountdownState & CountdownHelpers {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  const interval = useRef(setInterval(() => {}))

  useEffect(() => {
    setTime(initialTime)
    setIsRunning(false)
  }, [initialTime])

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, intervalMs)
    }
    if (!isRunning) {
      clearInterval(interval.current)
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [isRunning, intervalMs])

  useEffect(() => {
    if (time === 0) clearInterval(interval.current)
  }, [time, interval])

  const startCountdown = () => setIsRunning(true)
  const stopCountdown = () => setIsRunning(false)
  const resetCountdown = () => {
    setTime(initialTime)
    setIsRunning(false)
  }

  return {
    time,
    isRunning,
    startCountdown,
    stopCountdown,
    resetCountdown,
  }
}

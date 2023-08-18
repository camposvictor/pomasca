import { useState, useEffect } from 'react'

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

  useEffect(() => {
    setTime(initialTime)
    setIsRunning(false)
  }, [initialTime])

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1)
      }, intervalMs)
    }
    if (!isRunning) {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval)
    }
  }, [isRunning, intervalMs])

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

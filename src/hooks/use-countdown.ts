// useCountdown.js
import { useState, useEffect, useMemo } from 'react'

type UseCountdownProps = {
  initialTime: number
  interval: number
}

export type CountdownControllers = {
  startCountdown: () => void
  pauseCountdown: () => void
  resetCountdown: () => void
}

export type CountdownHelpers = {
  time: number
  isRunning: boolean
}

export function useCountdown({
  initialTime = 25 * 60 * 1000,
  interval = 1000,
}: UseCountdownProps): CountdownControllers & CountdownHelpers {
  const [time, setTime] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  const countdown: Worker = useMemo(
    () => new Worker(new URL('@/workers/timer.ts', import.meta.url)),
    [],
  )

  useEffect(() => {
    setTime(initialTime)
    setIsRunning(false)
  }, [initialTime])

  useEffect(() => {
    if (window.Worker) {
      countdown.onmessage = (e) => {
        if (e.data.command === 'tick') {
          setTime((prevTime) => prevTime - e.data.time)
        }
      }
    }

    return () => {
      // countdown.terminate()
    }
  }, [])

  const startCountdown = () => {
    countdown.postMessage({ command: 'start', interval })
    setIsRunning(true)
  }

  const pauseCountdown = () => {
    countdown.postMessage({ command: 'pause' })
    setIsRunning(false)
  }

  const resetCountdown = () => {
    countdown.postMessage({ command: 'reset' })
    setTime(initialTime)
    setIsRunning(false)
  }

  return { time, isRunning, startCountdown, pauseCountdown, resetCountdown }
}

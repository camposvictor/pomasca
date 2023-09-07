import Sound from '@/assets/alarm.wav'
import { usePomoStore } from '@/stores/pomo'
import { useEffect } from 'react'
import {
  CountdownControllers,
  CountdownHelpers,
  useCountdown,
} from './use-countdown'

type PomoControllers = CountdownControllers & {
  handleNextMode: () => void
}

type PomoHelpers = CountdownHelpers & {
  formattedTime: string
}

const alarm = new Audio(Sound)
alarm.volume = 0.25

function formatTime(ms: number) {
  const seconds = ms / 1000
  const minutes = Math.floor(seconds / 60)
  const hasLessThanTenMinutes = minutes < 10
  const hasLessThanTenSeconds = Math.floor(seconds % 60) < 10

  const formattedMinutes = `${hasLessThanTenMinutes ? '0' : ''}${Math.floor(
    minutes,
  )}`
  const formattedSeconds = `${hasLessThanTenSeconds ? '0' : ''}${Math.floor(
    seconds % 60,
  )}`
  return `${formattedMinutes}:${formattedSeconds}`
}

export function usePomo(): PomoControllers & PomoHelpers {
  const { activeTime, setMode, mode } = usePomoStore((state) => ({
    activeTime: state.activeTime,
    setMode: state.setMode,
    mode: state.mode,
  }))

  const { time, isRunning, resetCountdown, startCountdown, pauseCountdown } =
    useCountdown({
      initialTime: activeTime,
      interval: 1000,
    })

  const formattedTime = formatTime(time)

  useEffect(() => {
    document.title = `${formattedTime} | Pomasca`
  }, [formattedTime])

  const hasTimeEnded = time === 0

  useEffect(() => {
    if (hasTimeEnded) {
      alarm.play()
    }
  }, [hasTimeEnded])

  function handleNextMode() {
    alarm.pause()
    alarm.currentTime = 0
    if (mode === 'pomo') {
      setMode('short-break')
      return
    }
    setMode('pomo')
  }

  return {
    time,
    formattedTime,
    isRunning,
    handleNextMode,
    startCountdown,
    resetCountdown,
    pauseCountdown,
  }
}

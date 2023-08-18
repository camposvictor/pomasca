import { Pause, Play, RotateCcw, SkipForward } from 'lucide-react'
import { useCountdown } from '../hooks/use-countdown'
import { Clock } from './clock'
import { Countdown } from './countdown'
import Sound from '../assets/alarm.wav'
import { useEffect } from 'react'
import { TimerButton } from './timer-button'
import { usePomoStore } from '../stores/pomo'

const alarm = new Audio(Sound)

export function Timer() {
  const activeTime = usePomoStore((state) => state.activeTime)
  const { time, isRunning, resetCountdown, startCountdown, stopCountdown } =
    useCountdown({
      initialTime: activeTime,
      intervalMs: 1000,
    })

  useEffect(() => {
    if (time === 0) alarm.play()
  }, [time])

  function handlePlayPause() {
    if (isRunning) {
      stopCountdown()
      return
    }
    startCountdown()
  }

  function handleReset() {
    resetCountdown()
  }

  return (
    <section className="my-8 flex flex-col items-center">
      <div className="relative z-20 flex aspect-square h-full w-2/3 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <Clock currentTime={time} totalTime={activeTime} strokeWidth={8} />
        <Countdown time={time} />
      </div>
      <div className="mt-5 flex items-center gap-4">
        <TimerButton onClick={handleReset} variant="outline">
          <RotateCcw size={20} />
        </TimerButton>
        <TimerButton onClick={handlePlayPause} size="lg">
          {isRunning ? (
            <Pause size={24} />
          ) : (
            <span className="translate-x-0.5">
              <Play size={24} />
            </span>
          )}
        </TimerButton>
        <TimerButton variant="outline">
          <SkipForward size={20} />
        </TimerButton>
      </div>
    </section>
  )
}

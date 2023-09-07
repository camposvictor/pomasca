import { Pause, Play, RotateCcw, SkipForward } from 'lucide-react'
import { Clock } from './clock'
import { Countdown } from './countdown'
import { useEffect, useState } from 'react'
import { TimerButton } from './timer-button'
import * as Toast from './ui/toast'
import { usePomo } from '@/hooks/use-pomo'

export function Timer() {
  const [showToast, setShowToast] = useState(false)
  const {
    time,
    startCountdown,
    resetCountdown,
    pauseCountdown,
    isRunning,
    handleNextMode,
    formattedTime,
  } = usePomo()

  const hasTimeEnded = time === 0

  useEffect(() => {
    if (hasTimeEnded) setShowToast(true)
  }, [hasTimeEnded])

  function handlePlayPause() {
    isRunning ? pauseCountdown() : startCountdown()
  }

  return (
    <section className="my-8 flex flex-col items-center">
      <div className="relative z-20 flex aspect-square h-full w-2/3 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <Clock currentTime={time} strokeWidth={8} />
        <Countdown formattedTime={formattedTime} />
      </div>
      <div className="mt-5 flex items-center gap-4">
        <TimerButton onClick={resetCountdown} variant="outline">
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
      <Toast.ToastProvider swipeDirection="right">
        <Toast.Toast open={showToast} onOpenChange={setShowToast}>
          <div className="grid gap-1">
            <Toast.ToastTitle>O Tempo acabou</Toast.ToastTitle>
            <Toast.ToastDescription>
              Ir para a próxima etapa
            </Toast.ToastDescription>
          </div>
          <Toast.ToastAction altText="pause alarm" onClick={handleNextMode}>
            Next
          </Toast.ToastAction>
          <Toast.ToastClose />
        </Toast.Toast>
        <Toast.ToastViewport />
      </Toast.ToastProvider>
    </section>
  )
}

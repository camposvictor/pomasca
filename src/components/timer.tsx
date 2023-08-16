import { Play, RotateCcw, StopCircle } from 'lucide-react'
import { Button } from './ui/button'
import { useCountdown } from 'usehooks-ts'
import { Clock } from './clock'
import { Countdown } from './countdown'

export function Timer() {
  const duration = 1 * 60
  const [time, { resetCountdown, startCountdown, stopCountdown }] =
    useCountdown({ countStart: duration, intervalMs: 1000 })

  return (
    <section className="flex flex-col items-center">
      <div className="relative z-20 flex aspect-square h-full w-2/3 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
        <Clock currentTime={time} totalTime={duration} strokeWidth={8} />
        <Countdown time={time} />
      </div>
      <div className="mt-8 flex gap-4">
        <Button onClick={stopCountdown} size="icon" variant="outline">
          <StopCircle size={20} />
        </Button>
        <Button onClick={startCountdown} size="icon">
          <Play size={20} />
        </Button>
        <Button onClick={resetCountdown} size="icon" variant="outline">
          <RotateCcw size={20} />
        </Button>
      </div>
    </section>
  )
}

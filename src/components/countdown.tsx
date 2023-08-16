interface CountdownProps {
  time: number
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const hasLessThanTenMinutes = minutes < 10
  const hasLessThanTenSeconds = Math.floor(seconds % 60) < 10

  const formatedMinutes = `${hasLessThanTenMinutes ? '0' : ''}${Math.floor(
    minutes,
  )}`
  const formatedSeconds = `${hasLessThanTenSeconds ? '0' : ''}${Math.floor(
    seconds % 60,
  )}`
  return `${formatedMinutes}:${formatedSeconds}`
}

export function Countdown({ time }: CountdownProps) {
  return (
    <span className="absolute block text-5xl font-bold text-gray-900 dark:text-gray-50">
      {formatTime(time)}
    </span>
  )
}

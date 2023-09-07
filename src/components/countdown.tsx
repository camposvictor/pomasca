interface CountdownProps {
  formattedTime: string
}

export function Countdown({ formattedTime }: CountdownProps) {
  return (
    <span className="absolute block text-4xl font-bold text-gray-900 dark:text-gray-50 sm:text-5xl">
      {formattedTime}
    </span>
  )
}

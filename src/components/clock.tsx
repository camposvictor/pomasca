import { animate, motion, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

interface ClockProps {
  strokeWidth: number
  currentTime: number
  totalTime: number
}

export function Clock({ strokeWidth, totalTime, currentTime }: ClockProps) {
  const pathLength = useMotionValue(1)

  useEffect(() => {
    const progress = currentTime / totalTime
    animate(pathLength, progress, {
      type: 'spring',
      duration: 0.3,
      bounce: 0,
    })
  }, [currentTime, pathLength, totalTime])
  return (
    <motion.svg className="absolute h-full w-full">
      <motion.circle
        pathLength={1}
        className="stroke-gray-200 dark:stroke-gray-700"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={`calc(50% - ${strokeWidth / 2}px)`}
        cx="50%"
        cy="50%"
      />
      <motion.circle
        style={{ pathLength }}
        className="stroke-purple-600"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={`calc(50% - ${strokeWidth / 2}px)`}
        cx="50%"
        cy="50%"
      />
    </motion.svg>
  )
}

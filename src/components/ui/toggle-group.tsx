import React from 'react'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

const Root = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Root>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroup.Root
      {...props}
      ref={ref}
      className={twMerge(
        'relative inline-flex rounded-md bg-gray-200 p-0.5 dark:bg-gray-800',
        className,
      )}
    />
  )
})
Root.displayName = ToggleGroup.Root.displayName

const Item = React.forwardRef<
  React.ElementRef<typeof ToggleGroup.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroup.Item>
>(({ className, ...props }, ref) => {
  return (
    <ToggleGroup.Item
      {...props}
      ref={ref}
      className={twMerge(
        'relative z-0 inline-flex items-center justify-center rounded-md text-sm font-medium text-gray-500 transition hover:text-gray-900 data-[state=on]:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 dark:data-[state=on]:text-gray-50',
        className,
      )}
    />
  )
})
Item.displayName = ToggleGroup.Item.displayName

const Indicator = ({ id }: { id: string }) => {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-md border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-900"
      transition={spring}
      layoutId={id}
    />
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

export { Root, Item, Indicator }

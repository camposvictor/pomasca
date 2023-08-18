import { VariantProps, tv } from 'tailwind-variants'
import { button } from './ui/button'
import { Slot } from '@radix-ui/react-slot'

const timerButton = tv({
  extend: button,
  base: 'rounded-full',
  variants: {
    size: {
      default: 'h-12 w-12',
      lg: 'h-16 w-16',
    },
  },
})

interface TimerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof timerButton> {
  children: React.ReactNode
  asChild?: boolean
}

export function TimerButton({
  children,
  asChild = false,
  variant,
  size,
  ...props
}: TimerButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component className={timerButton({ variant, size })} {...props}>
      {children}
    </Component>
  )
}

import { ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, VariantProps } from 'tailwind-variants'

export const button = tv({
  base: 'rounded-md font-medium transition inline-flex gap-2 items-center justify-center disabled:opacity-50 disabled:pointer-events-none ',
  variants: {
    variant: {
      primary:
        'text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700',
      outline:
        'dark:text-gray-50 dark:bg-gray-900 dark:border-gray-700  dark:hover:border-gray-600 dark:hover:bg-gray-800 darktext-gray-900 bg-white border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100',
      destructive: 'text-white bg-red-600 hover:bg-red-500 active:bg-red-700',
      link: 'bg-transparent text-purple-600 hover:text-purple-500 active:text-purple-700',
    },
    size: {
      sm: 'text-xs px-2 py-1',
      default: 'text-sm px-3 py-2 ',
      lg: 'text-md px-4 py-2',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode
  asChild?: boolean
}

export function Button({
  children,
  asChild = false,
  variant,
  size,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component className={button({ variant, size })} {...props}>
      {children}
    </Component>
  )
}

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "relative isolate inline-flex transform-gpu items-center justify-center gap-2 overflow-hidden rounded-md text-sm font-medium transition-[color,background-color,border-color,transform,box-shadow] duration-[var(--motion-base)] ease-[var(--motion-ease)] will-change-transform before:pointer-events-none before:absolute before:inset-0 before:opacity-0 before:transition-opacity before:duration-[var(--motion-base)] before:ease-[var(--motion-ease)] before:content-[''] hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-hard)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          'bg-[var(--primary)] text-[var(--primary-foreground)] before:bg-[radial-gradient(120%_100%_at_50%_0%,var(--surface-glow),transparent_60%)] hover:-translate-y-0.5 hover:shadow-[0_12px_20px_var(--shadow-soft)] active:translate-y-0',
        secondary:
          'bg-[var(--secondary)] text-[var(--secondary-foreground)] before:bg-[radial-gradient(120%_100%_at_50%_0%,var(--surface-glow-warm),transparent_60%)] hover:-translate-y-0.5 hover:shadow-[0_12px_20px_var(--shadow-soft)] active:translate-y-0',
        outline:
          'border border-[var(--border)] bg-transparent text-[var(--foreground)] before:bg-[radial-gradient(120%_100%_at_50%_0%,var(--surface-glow),transparent_60%)] hover:-translate-y-0.5 hover:border-[var(--yellow)] hover:bg-[var(--muted)] hover:shadow-[0_12px_20px_var(--shadow-soft)] active:translate-y-0',
        ghost:
          'text-[var(--foreground)] before:bg-[radial-gradient(120%_100%_at_50%_0%,var(--surface-glow),transparent_60%)] hover:bg-[var(--muted)] hover:shadow-[0_8px_14px_var(--shadow-soft)] active:translate-y-0',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button }

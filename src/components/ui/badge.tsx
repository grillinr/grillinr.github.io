import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[#fabd2f73] bg-[#fabd2f1f] px-2.5 py-0.5 text-xs font-medium text-[#fabd2f]',
        className,
      )}
      {...props}
    />
  )
}

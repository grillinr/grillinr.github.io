import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'surface rounded-2xl border border-[var(--border)] p-5 md:p-6',
        className,
      )}
      {...props}
    />
  )
}

import { ReactNode, CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export default function Card({ children, className, hover = false, style }: CardProps) {
  return (
    <div
      className={cn(
        'bg-dark-800 rounded-xl p-6 border border-dark-600',
        hover && 'transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1',
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}

'use client'

import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <div className="inline-flex items-center gap-3">
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <Image
          src="/logo.png"
          alt="Gather Logo"
          fill
          className="object-contain"
          priority
          onError={(e) => {
            // Hide image if it doesn't exist, show text only
            e.currentTarget.style.display = 'none'
          }}
        />
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-black text-black dark:text-white uppercase`}>
          Gather
        </span>
      )}
    </div>
  )
}

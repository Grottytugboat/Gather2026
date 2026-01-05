'use client'

import Image from 'next/image'

export default function Signature() {
  return (
    <div className="inline-block">
      <Image
        src="/signature (8).png"
        alt="Tim's Signature"
        width={400}
        height={160}
        className="h-auto w-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] dark:invert"
        priority
      />
    </div>
  )
}

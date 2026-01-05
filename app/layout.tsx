import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gather - Stop Babysitting Systems That Kill Sales',
  description: 'Gather stores customer data once, then pushes it wherever it needs to go — so agencies don't have to keep fixing broken connections.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

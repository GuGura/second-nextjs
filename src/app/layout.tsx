import './globals.css'
import {Inter} from 'next/font/google'
import React from 'react'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Flowmazon',
  description: 'we make your wallet cry',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <main className='p-4 max-w-7xl m-auto min-w-[300]'>
      {children}
    </main>
    </body>
    </html>
  )
}

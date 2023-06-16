
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

import type { PropsWithChildren } from 'react'
import { RootStyleRegistry } from '../modules/shared/components/root-style-registry'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es">
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  )
};

import type { Metadata } from 'next'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import { AuthProvider } from '@/app/providers/AuthProvider'
import './globals.scss'

export const metadata: Metadata = {
  title: 'Abelohost Shop - Online Store'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="app">
            <Header />
            <main className="main">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Banner from '@/components/Banner'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Brasil Telhas',
  description: 'Telhas Metálicas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={montserrat.className}>
        <div className='bg-img_maquina_telhas w-full h-full bg-cover bg-center brightness-50'>
          <Header />
          <Banner />
        </div>
        {children}
      </body>
    </html>
  )
}

import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ClerkProvider} from '@clerk/nextjs'
import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RigthSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dhaga',
  description: '"Dhaga" is a dynamic online social media and social networking platform designed to foster meaningful interactions and connections among its users. This responsive webpage offers a diverse range of features that empower users to engage, share, and explore content and communities within its ecosystem.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <Topbar/>
        <main className='flex flex-row'>
           <LeftSidebar/>
            <section className='main-container'>
              <div className='w-full max-w-4xl'>
                {children}
              </div>
            </section>
           <RigthSidebar/>
        </main>
        <Bottombar/>
      </body>
    </html>
    </ClerkProvider>
  )
}

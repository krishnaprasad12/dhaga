import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import '../globals.css'

export const metadata = {
    title: 'Dhaga',
    description: '"Dhaga" is a dynamic online social media and social networking platform designed to foster meaningful interactions and connections among its users. This responsive webpage offers a diverse range of features that empower users to engage, share, and explore content and communities within its ecosystem.'
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children
    }:{
        children: React.ReactNode
    }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={'${inter.className} bg-dark-1'}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    )
}
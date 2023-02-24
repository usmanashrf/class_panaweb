'use client';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header'
import { ChakraProvider } from '@chakra-ui/react';
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ChakraProvider>
        <Header></Header>
        {children}
        <Footer></Footer>
        </ChakraProvider>
        
        </body>
    </html>
  )
}

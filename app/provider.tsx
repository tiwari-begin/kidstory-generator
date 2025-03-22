"use client";  
import React from 'react'
import { HeroUIProvider } from '@heroui/react'
const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
       <HeroUIProvider>
      {children}
    </HeroUIProvider>
    </div>
  )
}

export default Provider

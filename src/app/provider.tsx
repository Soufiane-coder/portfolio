"use client"
import { AnimatePresence } from 'framer-motion'
import { usePathname, } from 'next/navigation';
import React from 'react'

const Provider = ({children}: Readonly<{
    children: React.ReactNode;
  }>)  => {
    const path = usePathname()
 
  return (
    <AnimatePresence>
      <React.Fragment key={path}>
        {children}
      </React.Fragment>
    </AnimatePresence>
  )
}

export default Provider

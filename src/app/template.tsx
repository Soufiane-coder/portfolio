"use client"
import ParticlesContainer from '@/components/particles-container.component';
import TransitionEffect from '@/components/transition-effect.component';
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import React from 'react'

const Provider = ({children}: Readonly<{
    children: React.ReactNode;
  }>)  => {
    
  const path = usePathname()
  console.log(path)

  return (
    <>

      {/* <AnimatePresence mode='wait'>
        <TransitionEffect/>
      </AnimatePresence> */}
      
        {children}
    </>
  )
}

export default Provider

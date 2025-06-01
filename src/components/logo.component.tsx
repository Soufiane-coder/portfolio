"use client"
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import OakLogo from '@/../public/oak-logo.svg'
import Image from 'next/image'

const MotionLink = motion(Link)
const Logo = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-2">
        <MotionLink href='https://oakcorporation.org' className='w-16 h-16 p-4 dark:bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent border-gray-900 dark:border-light '
        >
          <Image src={OakLogo} alt="oak" className='fill-white'/>
        </MotionLink>
      </div>
    </div>
  )
}

export default Logo

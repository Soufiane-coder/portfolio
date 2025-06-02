'use client'

import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BonsaiiLogo from '@/../public/images/bonsaii-logo-nobackground-center.svg'
import BonsaiiLogoWhite from '@/../public/images/bonsaii-logo-nobackground-center-white.svg'
import ThemeContext from '@/app/theme.context'
import UseThemeSwitcher from './hooks/use-theme-switcher.hook'

const MotionLink = motion(Link)

const Logo = () => {
  const [logoSrc, setLogoSrc] = useState(BonsaiiLogo)
  const [mode] = UseThemeSwitcher()
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('Logo must be used within ThemeContext Provider')
  }

  const { contextValue } = context

  useEffect(() => {
    if (contextValue === 'dark') {
      setLogoSrc(BonsaiiLogoWhite)
    } else {
      setLogoSrc(BonsaiiLogo)
    }
  }, [contextValue])

  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        target='_blank'
        href="https://bonsaii.org"
        className="w-16 h-16 dark:bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold border border-solid border-transparent"
      >
        <Image
          src={logoSrc}
          alt="Oak Logo"
          width={64}
          height={64}
          priority
        />
      </MotionLink>
    </div>
  )
}

export default Logo

"use client"
import Link from 'next/link'
import React from 'react'
import Logo from './logo.component'
import {usePathname} from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './icons.component'
import {motion} from 'framer-motion'
import UseThemeSwitcher from './hooks/use-theme-switcher.hook'

const CustomLink : React.FC<{href: string, title: string, className?: string,}> = 
    ({href, title, className=''} ) => {
    const path = usePathname()
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block absolute bg-dark left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${path === href ? 'w-full' : 'w-0'} dark:bg-light`}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    const [mode, setMode] = UseThemeSwitcher();

  return (
    <div>
      <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light '>
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About' className='mx-4'/>
            <CustomLink href='/projects' title='Project' className='mx-4'/>
            <CustomLink href='/articles' title='Article' className='ml-4'/>
        </nav>
        
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a 
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}
                href='https://twitter.com'
                className='w-6 mr-3'
                target={"_blank"}>
                <TwitterIcon/>
            </motion.a>
            <motion.a 
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}
                href='/'
                target={"_blank"}
                className='w-6 mr-3'>
                <GithubIcon/>
            </motion.a>
            <motion.a 
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}
                href='/'
                target={"_blank"} className='w-6 mr-3'>
                <LinkedInIcon/>
            </motion.a>
            <motion.a 
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}
                href='/'
                target={"_blank"}
                className='w-6 mr-3'>
                <PinterestIcon/>
            </motion.a>
            <motion.a
                whileHover={{y: -2}}
                whileTap={{scale: 0.9}}
                href='/'
                target={"_blank"}
                className='w-6 mr-3'>
                <DribbbleIcon/>
            </motion.a>
            <button
                className='ml-3 flex items-center justify-center rounded-full p-1 
                text-light bg-dark dark:text-dark dark:bg-light'
                onClick={() => setMode(mode === 'light' ? 'dark': 'light')}
            >
                {mode === 'dark' ? <SunIcon className='fill-dark'/> : <MoonIcon className='fill-dark'/>}
            </button>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
      </header>
    </div>
  )
}

export default NavBar

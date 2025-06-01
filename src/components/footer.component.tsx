import React from 'react'
import Layout from './layout.component'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-4 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                Build Witch <span className='text-primary text-2xl px-1 dark:text-primaryDark'>&#9825;</span>
                by &nbsp;<Link href='/about' className='underline underline-offset-2'>Marik</Link>
            </div>
            <Link href='https://buymeacoffee.com/soufianeamimi' target='_blank' className='underline underline-offset-2'>
              <Image src="/buy-me-coffe.png" alt="buy me coffe" width={160} height={20}/>
            </Link>
        </Layout>
    </footer>
  )
}

export default Footer

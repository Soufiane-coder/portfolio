import React from 'react'
import Layout from './layout.component'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center '>
                Build Witch <span className='text-primary text-2xl px-1'>&#9825;</span>
                by &nbsp;<Link href='https://devdreaming.com' className='underline underline-offset-2'>CodeBucks</Link>
            </div>
            <Link href='/' target='_blank' className='underline underline-offset-2'>Say hello</Link>

        </Layout>
    </footer>
  )
}

export default Footer

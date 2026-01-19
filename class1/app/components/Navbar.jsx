import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-10 h-20 w-full bg-blue-800'>
        <h2 className='text-2xl font-semibold'>Sheriyans</h2>
        <div className='flex items-center gap-10 font-semibold  text-xl'>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/course">Courses</Link>
        </div>
    </div>
  )
}

export default Navbar
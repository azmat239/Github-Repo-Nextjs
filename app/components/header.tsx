import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
      <header className='h-10 mt-1 grid grid-cols-2 text-center content-center bg-red-700'>
        <div className="logo">
        <h1 className='text-sm  '>
            <Link href='/'>
                  Welcome to The page
            </Link> 
        </h1>
        </div>
        <nav>

            <ul className='flex gap-3 justify-evenly'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>

                <li>
                    <Link href='/code/repo'>Repository</Link>
                </li>

                <li>
                    <Link href='/about/team'>Team</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header

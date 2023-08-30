import React from 'react'
import Link from 'next/link'
import Repo from '@/app/components/repo';
import Repodir from '@/app/components/Repodir';
import { Suspense } from 'react';



const repodec = ({params  : { name }}) => {
  return (
    
    <div className='bg-slate-500 mt-3 p-5'>
      <Link href='/code/repo' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-start'>Back To Repo</Link>
      <div className="text-center">
      <Suspense fallback={<div>Loading Repo...</div>}>

        <Repo name={name}/>
      </Suspense>
      <Suspense fallback={<div>Loading Directories</div>}> 

        <Repodir name={name}/>
      </Suspense>
      </div>
    </div>
  )
}

export default repodec
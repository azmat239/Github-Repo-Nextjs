import React from 'react';
import Link from 'next/link';

async function fetchrepo(){
    const response= await fetch(`https://api.github.com/users/azmat239/repos`,
    {
        next:{
          revalidate:60,
        }
      }
    );

    const res =await response.json();

    await new Promise((resolve)=>setTimeout(resolve,2000))

    return res;
}

const Repos = async () => {
    const repos = await fetchrepo();
  return (
    <div>

        <h2>Repositories</h2>
      <div className='repo-cont '>
        <ul className='grid grid-cols-3 gap-6 text-center  ml-2'>
            {repos.map((repo)=>{
                return <li key={repo.id}>
                    <Link href={`/code/repo/${repo.name}`}className='flex flex-col p-4 bg-black text-white mt-3 gap-4'>
                        <h3>{repo.name}</h3>
                        <p className='text-sm'>{repo.description}</p>
                    </Link>

                </li>
            })}
        </ul>
        
    </div>
</div>
  )
}

export default Repos

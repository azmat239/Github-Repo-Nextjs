import React from 'react';
import Link from 'next/link';

async function fetchcontent(name){
    const resp = await fetch(`https://api.github.com/repos/azmat239/${name}/contents`,
    {
      next:{
        revalidate:60,
      }
    }
    );
    await new Promise((resolve)=>setTimeout(resolve,3000));
    const req = resp.json();
    
    return req;
}

const Repodir = async ({name}) => {
    const content = await fetchcontent(name);
    const dir = content.filter((content)=> content.type === 'dir');

  return (
    <>
    <h2>Directories{dir.url}</h2>
    <ul>
      {
        dir.map((dir) =>{
            <li key={dir.path}>
                <Link href={`/code/repo/${name}/${dir.path}`}>{dir.path}</Link>
            </li>
        })
      }
    </ul>
    </>
  )
}

export default Repodir

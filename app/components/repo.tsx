import React from 'react'
async function fetchrepo(name){
    const respond = await fetch(`https://api.github.com/repos/azmat239/${name}`,
    {
      next:{
        revalidate:60,
      }
    }
    );

    await new Promise((resolve) => setTimeout(resolve,1000));

    const req = await respond.json();
    return req;

}
const Repo = async ({name}) => {
    const repo = await fetchrepo(name);
    

  return (
    <div>
      <h1>{repo.name}</h1>
      <h3>{repo.description}</h3>
      <span className='ml-4'>stars :  {repo.stargazers_count}</span> 
      <span  className='ml-4'>Forks :  {repo.forks_count}</span>
      <span  className='ml-4'>watchers :  {repo.watchers_count}</span>
    </div>
  )
}

export default Repo

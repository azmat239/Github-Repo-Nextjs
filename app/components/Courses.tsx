import React from 'react'

async function fetccourses(){
    const response =  await fetch("http://localhost:3000/api/courses");

    const req = response.json();
    return(req);
}

const Courses = async () => {
  const course = await fetccourses(); 
    return (
    <div>
      <h2>Courses Provided</h2>

      {
        course.map((course)=>{
            <div key={course.id}>
                <h1>{course.title}</h1>
                <h4>Level : {course.level}</h4>
                <p>{course.description}</p>
                
                <Link href={course.link}>
                    Go to Courses
                </Link>

            
            </div>
        })
      }
    </div>
  )
}

export default Courses

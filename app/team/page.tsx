import React from 'react'
import Member from '../components/Member'
import team from '../data/team.js'
const page = () => {
  return (
    <div className='w-screen min-h-screen pt-48'>
      <div className='flex flex-wrap gap-x-4 gap-y-10 justify-center items-center'>
        {
          team.map((member,index)=>{
            return(
              <Member key={index} img={member.img_url} name={member.name} linkedin={member.linkedin_url} instagram={member.github_url} position={member.position}></Member>
            )
          }
          )}
    
      </div>
    
    </div>
  )
}

export default page
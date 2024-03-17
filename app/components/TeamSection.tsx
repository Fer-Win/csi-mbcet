import React from 'react'
import team from '../data/team.js'
import Member from '../components/Member'

const TeamSection = ({TeamName}:{TeamName:string}) => {
  return (
    <div>
         <h1 className="ml-10 md:ml-24 text-3xl mt-16 mb-8">{TeamName}</h1>
         <div className='flex flex-wrap gap-x-4 gap-y-10 justify-center items-center'>
        {
          team.filter((member)=>{
            return member.team === TeamName
          }).map((member,index)=>{
            return(
              <Member key={index} img={member.img_url} name={member.name} linkedin={member.linkedin_url} instagram={member.github_url} position={member.position}></Member>
            )
          }
          )}
    
      </div>
    </div>
  )
}

export default TeamSection
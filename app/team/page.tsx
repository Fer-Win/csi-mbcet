import React from 'react'
import Member from '../components/Member'
import team from '../data/team.js'
import TeamSection from '../components/TeamSection'
const Page = () => {
  return (
    <div className='w-screen min-h-screen py-48'>
         <h2 className="ml-10 md:ml-24 text-6xl">Team</h2>
         

      <TeamSection TeamName='Management'/>
      <TeamSection TeamName='Design'/>
      <TeamSection TeamName='Content'/>
      <TeamSection TeamName='Finance'/>
      
    
    </div>
  )
}

export default Page
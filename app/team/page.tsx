import React from 'react'
import Member from '../components/Member'
import team from '../data/team.js'
import TeamSection from '../components/TeamSection'
import Heading from '../components/Heading'
const Page = () => {
  return (
    <div className='event-background w-screen h-fit min-h-screen pt-11 pb-48'>
         {/* <h2 className="ml-10 md:ml-24 text-6xl">Team</h2> */}
         
     <div className='pl-10 md:pl-24'>
     <Heading title='Meet Our Team' subtitle='Get to know the talented individuals leading our club.' refTitle='Empowering '/>
     </div>
      <TeamSection TeamName='Management'/>
      <TeamSection TeamName='Design'/>
      <TeamSection TeamName='Content'/>
      <TeamSection TeamName='Finance'/>
      
    
    </div>
  )
}

export default Page
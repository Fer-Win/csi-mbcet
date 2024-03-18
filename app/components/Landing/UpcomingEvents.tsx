'use client'
import React from 'react'
import Heading from '../Heading'
import eventsData from '../../data/events.js';
import EventCard from '../EventCard';
import { useRouter  } from 'next/navigation';
const UpcomingEvents = () => {
    const router = useRouter();
    const upcomingEvents = eventsData.filter((event) => event.EventType === 'upcoming').slice(0, 4);
  return (
    <div className='p-10 md:p-24'>
       <div className='flex flex-col md:flex-row items-start gap-8 justify-between'>
       <Heading title='Upcoming Events' subtitle='Stay updated with the latest events and activities organized by CSI.' refTitle='Discover'/>
       <button onClick={()=>router.push('/events')} className='flex px-3 py-2 bg-blue-500 rounded-md'>View all</button>
       </div>
        <div className='flex w-full flex-wrap gap-4 justify-between my-8'>
        {upcomingEvents.map((item, index) => {
              return (
                <EventCard
                  key={index}
                  EventName={item.EventName}
                  Date={item.Date}
                  EventType={item.EventType}
                  Tags={item.Tags}
                  ImageURL={item.ImageURL}
                  registeredNo={item.registeredNo}
                />
              );
            })}
        </div>
    </div>
  )
}

export default UpcomingEvents
import React from 'react'
import eventsData from '../data/events'
import EventCard from '../components/EventCard'
const page = () => {
  return (
    <div>
        <h2>Events</h2>
        <div className='w-screen h-screen'>
            {
                // eventsData[0].map((item)=>{
                //     return (
                        <EventCard EventName={eventsData[0].EventName} Date={eventsData[0].Date} EventType={eventsData[0].EventType} Tags={eventsData[0].Tags} ImageURL={eventsData[0].ImageURL} registeredNo={eventsData[0].registeredNo} />
                //     )
                // })
            }
        </div>
    </div>
  )
}

export default page
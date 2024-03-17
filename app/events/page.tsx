'use client';
import React, { useEffect, useState } from 'react';
import eventsData from '../data/events';
import EventCard from '../components/EventCard';
import Footer from '../components/Footer';

const Page = () => {
  const [events, setEvents] = useState(eventsData);
  const [input, setInput] = useState('');
  const [type, setType] = useState('all');
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const filteredEvents = eventsData.filter((item) => {
      const eventNameMatch = item.EventName.toLowerCase().includes(input.toLowerCase());
      const typeMatch = type === 'all' || item.EventType.toLowerCase() === type.toLowerCase();
      return eventNameMatch && typeMatch;
    });
    setEvents(filteredEvents);
    setNotFound(filteredEvents.length === 0);
  }, [input, type]);

  const handleInputChange = (e:any) => {
    setNotFound(false);
    setInput(e.target.value);
  };

  const handleTypeChange = (selectedType:string) => {
    setType(selectedType.toLowerCase());
  };

  return (
    <div className="w-screen py-48 min-h-[130vh] pb event-background">
      <h2 className="ml-10 md:ml-24 text-6xl mb-16">Events</h2>

      <div className='flex flex-col justify-start ml-10 md:gap-x-20 my-10 h-fit items-start md:flex-row md:ml-24 gap-5 '>
      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        value={input}
        className="text-sm text-white bg-transparent px-3 py-2 rounded-md border outline-none border-white md:w-1/4 w-3/4 "
        placeholder="Search for Events"
      />
      <div className="flex flex-wrap md:flex-nowrap md:gap-10 gap-3 text-xs ">
        <button className={`tab-button  ${type === 'all'?'border-white border-opacity-60 border bg-indigo-950':''}`} onClick={() => handleTypeChange('all')}>
          All
        </button>
        <button className={`tab-button ${type === 'upcoming'?'border-white border-opacity-60 border bg-indigo-950':''}`}  onClick={() => handleTypeChange('upcoming')}>
          Upcoming
        </button>
        <button className={`tab-button ${type === 'past'?'border-white border-opacity-60 border bg-indigo-950':''}`}  onClick={() => handleTypeChange('past')}>
          Past
        </button>
        <button className={`tab-button ${type === 'ongoing'?'border-white border-opacity-60 border bg-indigo-950':''}`}  onClick={() => handleTypeChange('ongoing')}>
          Ongoing
        </button>
      </div>
      </div>
      {
        !notFound && (
          <div className="w-screen min-h-screen mb-40 flex justify-center mx-auto px-24 gap-20 flex-wrap">
            {events.map((item, index) => {
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
        )
      }
      {notFound && <h1 className="text-5xl text-center mt-20">No Events Found</h1>}
 
    </div>
  );
};

export default Page;

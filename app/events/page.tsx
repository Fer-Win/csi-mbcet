'use client';
import React, { useEffect, useState } from 'react';
import eventsData from '../data/events';
import EventCard from '../components/EventCard';

const page = () => {
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
    <div className="w-screen h-screen">
      <h2 className="px-24 text-6xl mb-24">Events</h2>

      <input
        type="text"
        onChange={(e) => handleInputChange(e)}
        value={input}
        className="text-black"
        placeholder="Search for Events"
      />
      <div className="flex gap-10 m-10">
        <button className={`px-2 py-1 bg-gray-800 text-white text-xl ${type === 'all'?'border-red-500 border-2':''}`} onClick={() => handleTypeChange('all')}>
          All
        </button>
        <button className={`px-2 py-1 bg-gray-800 text-white text-xl ${type === 'upcoming'?'border-red-500 border-2':''}`}  onClick={() => handleTypeChange('upcoming')}>
          Upcoming
        </button>
        <button className={`px-2 py-1 bg-gray-800 text-white text-xl ${type === 'past'?'border-red-500 border-2':''}`}  onClick={() => handleTypeChange('past')}>
          Past
        </button>
        <button className={`px-2 py-1 bg-gray-800 text-white text-xl ${type === 'ongoing'?'border-red-500 border-2':''}`}  onClick={() => handleTypeChange('ongoing')}>
          Ongoing
        </button>
      </div>
      {
        !notFound && (
          <div className="w-screen h-screen flex justify-center mx-auto gap-20 flex-wrap">
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
      {notFound && <h1 className="text-4xl text-center">No Events Found</h1>}
    </div>
  );
};

export default page;

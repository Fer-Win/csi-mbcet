import { redirect } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
interface EventCardProps {
    EventName : string,
    Date : string,
    EventType : string,
    Tags :string[],
    ImageURL : string,
    registeredNo: number

}

const EventCard:React.FC<EventCardProps> = ({EventName,Date,EventType,Tags,ImageURL,registeredNo}) => {
    const url = 'https://plus.unsplash.com/premium_photo-1709311442556-f4af586ad5fb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  return (
    <div className='p-5 overflow-hidden flex flex-col w-[25rem] rounded-md text-2xl font-bold gap-7 h-fit border-white border-2 '>
        <div className='w-full  h-60 p-0 m-0 '>
            <Image src={url} width={900} height={900} alt='Event Image' className='rounded-md object-cover '></Image>
        </div>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col '>
                <h1 className='text-3xl font-semibold font-'>{EventName}</h1>
                <h1 className='text-lg font-normal mb-1'>{Date}</h1>
                <div className='flex justify-start items-start flex-wrap'>
                    {
                        Tags.map((tag) => {
                            return <h1 className='text-sm capitalize font-normal bg-transparent border-white border-2 rounded-full m-1 px-4 flex justify-center items-center py-1'>{tag}</h1>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between'>
            <h1 className='text-xl capitalize w-1/3 font-normal bg-blue-500 rounded-md m-1 px-4 flex justify-center items-center py-1'>{EventType}</h1>
            {
                EventType === 'upcoming' ? <Link href={'https://forms.gle/XqyrWmPBkx1hU8WLA'} target='_blank' className='text-xl capitalize w-1/3 font-normal bg-blue-500 rounded-md m-1 px-4 flex justify-center items-center py-1'>Register</Link> : ''
            }
            </div>
        </div>
    </div>
  )
}

export default EventCard
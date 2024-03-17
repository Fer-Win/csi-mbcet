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
    <div className='hover:scale-110 transition-all ease-in duration-150  p-2 overflow-hidden flex flex-col w-fit  rounded-md text-2xl font-bold gap-5 h-fit min-h-max border-white border border-opacity-25 hover:bg-white hover:bg-opacity-5 '>
        <div className=' overflow-hidden  bg-center bg-cover relative'>
           
            <div className='text-sm font-normal l mb-1 flex flex-col justify-center items-center px-2 text-center rounded-md py-1 right-3 top-3 bg-white leading-6 text-black z-10 absolute'>{Date}</div>
            <Image src={url} width={900} height={900} alt='Event Image' className='rounded-md object-cover '></Image>
        </div>
        <div className='flex flex-col gap-1'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-light leading-tight px-2'>{EventName}
                </h1>
                  {/* <h1 className='text-xl capitalize w-1/3 font-normal bg-blue-500 rounded-md m-1 px-4 flex justify-center items-center py-1'>{EventType}</h1> */}
                {/* <h1 className='text-lg font-normal mb-1'>{Date}</h1> */}
                <div className='flex justify-start items-start flex-wrap'>
                    {
                        Tags.map((tag,index) => {
                            return <h1 key={index} className='text-xs capitalize font-extralight bg-transparent border-white border-opacity-45 border rounded-full m-1 px-[7px] flex justify-center items-center py-1'>{tag}</h1>
                        })
                    }
                </div>
            </div>
            <div className='flex justify-between'>
            {/* <h1 className='text-xl capitalize w-1/3 font-normal bg-blue-500 rounded-md m-1 px-4 flex justify-center items-center py-1'>{EventType}</h1> */}
            {
                EventType === 'upcoming' ? <Link href={'https://forms.gle/XqyrWmPBkx1hU8WLA'} target='_blank' className=''></Link> : ''
            }
            </div>
        </div>
    </div>
  )
}

export default EventCard
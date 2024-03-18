import React from 'react'
import Heading from './Heading'
import Image from 'next/image'

const NewsLetter = () => {
  return (
    <div className='bg-white py-14 px-10 md:pl-24 mb-24 w-screen relative overflow-hidden group'>
      <div className='hidden md:block absolute  top-0 right-0  group-hover:scale-110 transition-all duration-200 ease-in-out'>
        <Image src={'/model1.png'} width={600} height={600} alt='model1' ></Image>
      </div>
      <div className='text-black'>
        <Heading refTitle='Latest News' title='Newsletter' subtitle='Stay up to date on the latest features and releases in the technical field by joining our newsletter.' />
      </div>

      <div className='flex flex-col gap-6 pt-6 pb-2 md:flex-row'> 
        <input
          type="email" 
          className='rounded-sm pl-4 w-full md:w-96 py-2 outline-none bg-transparent border border-black border-opacity-25 text-black'
        />
        <button className='flex justify-center bg-black text-white items-center border-white border px-4 py-2 border-opacity-25 hover:bg-white hover:border-black hover:text-black transition-all  duration-200 ease-in-out'>
          Subscribe
        </button>
      </div>

      <div className='text-black font-light text-sm mt-4'> 
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </div>
    </div>
  )
}

export default NewsLetter

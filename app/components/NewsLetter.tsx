import React from 'react'
import Heading from './Heading'

const NewsLetter = () => {
  return (
    <div className='pt-5 pb-14 pl-10 md:pl-24'>
      <Heading refTitle='Latest News' title='Newsletter' subtitle='Stay up to date on the latest features and releases in the technical field by joining our newsletter.'/>
      <div className='flex gap-6 pt-6 pb-2'>
        <input type="email" className='rounded-sm px-24 py-2 outline-none bg-transparent border border-white border-opacity-25'/>
        <button className='flex justify-center items-center border-white border px-4 py-2 border-opacity-25 hover:bg-white hover:text-black transition-all  duration-200 ease-in-out'>Subscribe</button>
      </div>
      <div className='font-extralight text-xs  text-opacity-45 '>
      By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </div>
    </div>
  )
}

export default NewsLetter
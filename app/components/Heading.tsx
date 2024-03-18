import React from 'react'

interface HeadingProps {
    title : string,
    subtitle : string
    refTitle : string
}

const Heading:React.FC<HeadingProps> = ({title,subtitle,refTitle}) => {
  return (
    <div className='flex flex-col'>
        <h1 className=' itali font-extralight '>{refTitle}</h1>
        <h2 className=" text-4xl font-semibold">{title}</h2>
        <h3 className=" text-lg font-extralight">{subtitle}</h3>
    </div>
  )
}

export default Heading
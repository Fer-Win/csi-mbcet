import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='pt-48 pb-20 md:py-24 px-10 md:px-24 event-background'>
      <div>
        <h1 className="text-6xl mb-4">About Us</h1>
        <div className='flex justify-center text-xl font-extralight items-center'>
          <h1>The Computer Society of India (CSI) Student Branch at Mar Baselios College of Engineering &amp; Technology (MBCET) is a vibrant community dedicated to fostering student interest and growth in computer science and related fields. Established in 2004, we are the <b>largest and most active student branch in Kerala</b>.</h1>
        </div>

        <h1 className="text-4xl mb-4  mt-16">Our Mission</h1>
        <div className='flex flex-col justify-start text-2xl font-bold rounded-md py-4 px-4  items-start bg-white text-black relative'>
          We are committed to:
          <Image src={'/model3.png'} width={900} height={900} alt='Model2'className=' hidden md:block absolute -bottom-40 -right-80' ></Image>
          <ol className='font-medium text-xl px-8 py-4 flex flex-col gap-1 '>
            <li>Promoting knowledge sharing through workshops, seminars, and expert lectures.</li>
            <li>Encouraging practical skills development by organizing coding competitions, hackathons, and hands-on training sessions.</li>
            <li>Providing a platform for peer interaction and collaboration through events and activities.</li>
            <li>Bridging the gap between academia and industry by connecting students with professionals.</li>
            <li>Uplifting the overall IT landscape in Kerala by fostering a culture of innovation and excellence.</li>
          </ol>
        </div>

        <h1 className="text-4xl mb-4  mt-16">Our Achievements</h1>
        <div className='flex flex-col justify-start text-2xl font-bold rounded-md py-4 px-4  items-start bg-white text-black relative'>
          Over the years, the CSI Student Branch at MBCET has earned a reputation for excellence. Some of our notable achievements include:
          <Image src={'/model2.png'} width={800} height={800} alt='Model3'className='hidden md:block absolute -bottom-70 -right-60 rota' ></Image>
           <ol className='font-medium text-xl px-8 py-4 flex flex-col gap-1 w-5/6 '>
            <li>Being recognized as the Best Student Branch among engineering colleges in Kerala, Tamil Nadu, and Pondicherry for the years 2010 and 2011.</li>
            <li>Successfully hosting the prestigious 26th National Student Convention (NSC 2010) in association with the Trivandrum Chapter of CSI.</li>
            <li>Having our Student Branch Counselor, Mr. Biju B Varghese, receive the &quot;Significant Contribution Award - Trivandrum Chapter&quot; at the CSI Annual Convention in 2015 and the &quot;Longest Continuous Student Branch Counselor&quot; Award in 2012.</li>
          </ol>
        </div>

        <h1 className="text-4xl mb  mt-16">Join Us:</h1>
        <div className='flex flex-col justify-start text-xl font-extralight items-start'>
          We encourage all students interested in computer science and technology to join the CSI Student Branch at MBCET. Membership provides access to our events, resources, and a network of like-minded individuals.
        </div>
      </div>
    </div>
  );
};

export default About;

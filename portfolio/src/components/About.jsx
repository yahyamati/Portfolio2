import React from 'react';
//import { assets } from '../assets/assets'; 

const About = () => {
  return (
    <div className={`flex flex-col p-8 pt-20  bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6`}>
      
      <div className='flex flex-col md:flex-row gap-8 items-center max-w-[600px] md:text-left'>
        {/* Text Content */}
        <div className='flex-1'>
          <p className='text-lg'>
            <span className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-4 text-white">
              Hi, I'm Yahia 👋
            </span>,
            <span className='inline-block max-w-[600px] md:text-2xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
              a Software Engineer who loves building innovative solutions and empowering others through technology.
            </span>
          </p>
        </div>

        {/* Image */}
        {/* <div className='flex-shrink-0'>
          <img 
            className='hidden lg:!flex rounded-full h-36 w-36 object-cover shadow-lg' 
            src={assets.photo} 
            alt="Yahia Mati" 
          />
        </div> */}
      </div>

      {/* Additional Section */}
      <div className='mt-8'>
        <h1 className='text-2xl font-bold mb-4 text-white'>About</h1>
        <p className='text-xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>
          Computer science engineer specializing in full-stack web development, with expertise in API development using Node Js and Express Js. Skilled in crafting interactive, data-driven dashboards with Angular and Next Js, dedicated to delivering impactful solutions and enhancing user engagement.
        </p>
      </div>
    </div>
  );
};

export default About;

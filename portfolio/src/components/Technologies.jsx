import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiTailwindcss, SiFirebase, SiPython, SiExpress } from 'react-icons/si';
import { FaNodeJs, FaJava } from 'react-icons/fa';

const Technologies = () => {
  return (
    <div className='pb-20'>
      <h2 className='my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent'>
        Technologies
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        <div>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
        <div>
          <TbBrandNextjs className='text-7xl text-gray-500' />
        </div>
        <div>
          <SiMongodb className='text-7xl text-cyan-500' />
        </div>
        <div>
          <FaNodeJs className='text-7xl text-green-500' />
        </div>
        <div>
          <SiTailwindcss className='text-7xl text-blue-400' />
        </div>
        <div>
          <FaJava className='text-7xl text-red-600' />
        </div>
        <div>
          <SiPython className='text-7xl text-blue-500' />
        </div>
        <div>
          <SiExpress className='text-7xl text-gray-700' />
        </div>
        <div>
          <SiFirebase className='text-7xl text-yellow-500' />
        </div>
      </div>
    </div>
  );
};

export default Technologies;

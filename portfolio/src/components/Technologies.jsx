import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiTailwindcss, SiFirebase, SiPython, SiExpress } from 'react-icons/si';
import { FaNodeJs, FaJava,FaGitAlt  } from 'react-icons/fa';
import {motion} from "framer-motion"

const iconVariants= (duration)=>({
  initial : {y :-10},
  animate : {
    y:[10 , -10],
    transition : {duration : duration , repeat : Infinity , repeatType : 'reverse' , ease : "linear"},

  }
})

const Technologies = () => {
  return (
    <div className='pb-20 '>
      <motion.h2 
      whileInView={{opacity : 1 , y :0}}
      initial={{opacity : 0 , y :-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent'>
        Technologies
      </motion.h2>
      <motion.div className='flex flex-wrap items-center justify-center gap-8'
          whileInView={{opacity : 1 , x :0}}
          initial={{opacity : 0 , x :-100}}
          transition={{duration:1.5}}>
        <motion.div 
        initial="initial"
        animate="animate"
        variants= {iconVariants(2.5)}>
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </motion.div>
        <motion.div 
         initial="initial"
         animate="animate"
         variants= {iconVariants(3)}>
          <TbBrandNextjs className='text-7xl text-gray-500' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(5)}>
          <SiMongodb className='text-7xl text-cyan-500' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(2)}>
          <FaNodeJs className='text-7xl text-green-500' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(2.5)}>
          <SiTailwindcss className='text-7xl text-blue-400' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(4)}>
          <FaJava className='text-7xl text-red-600' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(6)}>
          <SiPython className='text-7xl text-blue-500' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(4)}>
          <SiExpress className='text-7xl text-gray-700' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(2.5)}>
          <SiFirebase className='text-7xl text-yellow-500' />
        </motion.div>
        <motion.div
         initial="initial"
         animate="animate"
         variants= {iconVariants(5)}>
          <FaGitAlt className='text-7xl text-orange-600' />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

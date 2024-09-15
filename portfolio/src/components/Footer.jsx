import React from 'react';
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className='pb-20 pt-20'>
      <div className='flex flex-col items-center justify-center'>
        <motion.h1 className='text-3xl font-extrabold tracking-tight text-white sm:text-4xl xl:text-5xl mb-6'
        whileInView={{opacity : 1 , x :0}}
        initial={{opacity : 0 , x :-100}}
        transition={{duration:1}}>
          Get in Touch
        </motion.h1>
        <motion.p className='bg-gradient-to-r from-stone-400 to-stone-700 bg-clip-text text-2xl tracking-tight text-transparent text-center'
        whileInView={{opacity : 1 , x :0}}
        initial={{opacity : 0 , x :100}}
        transition={{duration:1}}>
          Want to chat? Just shoot me a DM on{' '}
          <a 
            href='https://www.linkedin.com/in/yahya-mati-265381298/' 
            target='_blank' 
            className='hover:underline decoration-stone-400 text-stone-300 cursor-pointer'
          >
            LinkedIn
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;

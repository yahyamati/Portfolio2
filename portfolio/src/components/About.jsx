import React from "react";
import { motion } from "framer-motion";
//import { assets } from '../assets/assets';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`flex flex-col p-8 pt-20  bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6`}
      id="about"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center max-w-[600px] md:text-left">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-lg" variants={childVariants}>
            <motion.span
              className="inline-block text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl mb-4 text-white"
              variants={childVariants}
            >
              Hi, I'm Yahia 👋
            </motion.span>
            ,
            <motion.span
              className="inline-block max-w-[600px] md:text-2xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
              variants={childVariants}
            >
              a Software Engineer who loves building innovative solutions and
              empowering others through technology.
            </motion.span>
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
      <div className="mt-8">
        <motion.h1
          className="text-2xl font-bold mb-4 text-white"
          variants={childVariants}
        >
          About
        </motion.h1>
        <motion.p
          className="text-xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
          variants={childVariants}
        >
          I am a dedicated and versatile full stack developer with a passion for
          creating efficient and user-friendly web applications. With 1 years of
          professional experience, I have worked with a variety of technologies,
          including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My
          journey in web development began with a deep curiosity for how things
          work, and it has evolved into a career where I continuously strive to
          learn and adapt to new challenges. I thrive in collaborative
          environments and enjoy solving complex problems to deliver
          high-quality solutions. Outside of coding, I enjoy staying active,
          exploring new technologies, and contributing to open-source projects.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default About;

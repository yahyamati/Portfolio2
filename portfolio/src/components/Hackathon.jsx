import React from "react";
import { motion } from "framer-motion";
import { HACKATHONS } from "../assets/assets";

const Hackathon = () => {
  return (
    <div className="pb-4 pl-7">
      <motion.h2
        className="my-20 text-center text-4xl bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Hackathons
      </motion.h2>
      <div className="flex flex-col items-center">
        {HACKATHONS.map((Hackathon, index) => (
          <div key={index} className="mb-8 flex overflow-hidden">
            <motion.div
              className="flex-shrink-0"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <img src={Hackathon.image} className="mb-6 rounded-full h-20" />
            </motion.div>

            <motion.div
              className="w-full max-w-2xl lg:w-4/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
            >
              <p className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                {Hackathon.year}
              </p>
              <h1 className="mb-2 font-semibold text-xl text-white bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                {Hackathon.name}{" "}
              </h1>
              <p className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                {Hackathon.place}
              </p>
              <p className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                {Hackathon.description}
              </p>

              <div className="flex space-x-4">
                <a
                  href={Hackathon.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Linkedin 
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hackathon;

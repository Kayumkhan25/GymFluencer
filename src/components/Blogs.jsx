import React from 'react';
import gym7 from '../assets/images/gym7.png';
import gym8 from '../assets/images/gym8.png';
import gym14 from '../assets/images/gym14.png';
import { motion } from 'framer-motion';

const Blogs = () => {
  return (
    <section id="blogs" className="min-h-screen py-12 px-12">
        <motion.div
            initial={{opacity:0,
                scale:0
            }}
            whileInView={{opacity:1,
                    scale: 1}}
            transition={{duration:2}}>
        <h2 className="text-4xl text-center leading-normal p-2 mb-8 font-semibold">
            Our Latest <span className="gradient">Blogs</span>
        </h2>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Image - Half Screen */}
        <div className="md:w-1/2 relative flex items-end justify-center rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <img src={gym14} alt="ben" className="object-fill w-full h-full  opacity-80 hover:scale-110 transition-all duration-200" />
          </div>
          <div className="z-10 flex flex-col gap-3 p-7">
            <p className="bg-fuchsia-700 text-white px-4 py-2 rounded-full max-w-fit ">
              Exercise
            </p>
            <p className="text-2xl text-white font-semibold mt-2">
              CONQUERING CONSISTENCY: HOW TO MAKE EXERCISE A HABIT YOU LOVE
            </p>
            <div className="flex gap-2 px-5">
              <p className="text-lg text-slate-300">Sept 10, 2024</p>
              <div className="w-[1px] bg-slate-500"></div>
              <p className="text-lg text-slate-300">Ben</p>
            </div>
          </div>
        </div>

        {/* Right Side - Second and Third Images */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {/* Second Blog */}
          <div className="relative h-[20rem] overflow-hidden rounded-md">
            <img src={gym7} alt="sam" className="object-fill w-full h-full opacity-80 hover:scale-110 transition-all duration-200" />
            <div className="z-10 p-4 absolute bottom-0 left-0">
              <p className="bg-sky-700 text-white px-4 py-2 rounded-full max-w-fit">Weight loss</p>
              <p className="text-2xl text-white font-semibold mt-2">
                WEIGHT LOSS: A SUSTAINABLE APPROACH FOR A HEALTHIER YOU
              </p>
              <div className="flex gap-2 mt-2 px-3">
                <p className="text-lg text-white">Aug 26, 2024</p>
                <div className="w-[1px] bg-slate-500"></div>
                <p className="text-lg text-white">Sam</p>
              </div>
            </div>
          </div>

          {/* Third Blog */}
          <div className="relative h-[20rem] overflow-hidden rounded-md">
            <img src={gym8} alt="Travis" className="object-fill w-full h-full opacity-80 hover:scale-110 transition-all duration-200" />
            <div className="z-10 p-4 absolute bottom-0 left-0">
              <p className="bg-emerald-700 text-white px-4 py-2 rounded-full max-w-fit">
                Nutrition
              </p>
              <p className="text-2xl text-white font-semibold mt-2">
                FUEL YOUR FITNESS: A GUIDE TO NUTRITION FOR PEAK PERFORMANCE
              </p>
              <div className="flex gap-2 mt-2 px-3">
                <p className="text-lg text-white">Aug 12, 2024</p>
                <div className="w-[1px] bg-slate-500"></div>
                <p className="text-lg text-white">Travis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

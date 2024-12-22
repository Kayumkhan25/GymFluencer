import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="flex flex-col w-11/12 mx-auto justify-center gap-y-28" id="about">
        <div className="flex flex-col gap-5">
        <motion.div
            initial={{opacity:0,
                scale:0
            }}
            whileInView={{opacity:1,
                    scale: 1}}
            transition={{duration:2}} className="text-7xl text-center leading-tight p-2">
          <h1>
            YOUR <span className="gradient">FITNESS.</span>
          </h1>
          <h1>
            OUR <span className="gradient">MISSION.</span>
          </h1>
        </motion.div>
        <p className="w-7/12 mx-auto text-center text-xl leading-relaxed p-2 text-slate-300">
          At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals.
          We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more
          motivating. Join us as we help you transform your fitness journey, one workout at a time.
        </p>
      </div>
      <div className="flex text-center justify-between">
        <div className="flex flex-col gap-y-4">
          <h2 className="text-5xl font-semibold">
            <CountUp start={0} end={463} duration={2.5} suffix="k+"  />
          </h2>
          <p className="text-lg text-slate-300">Workouts logged and progress tracked every month</p>
        </div>
        <div className="w-1 bg-slate-800 mx-2 "></div>
        <div className="flex flex-col gap-y-4 ">
          <h2 className="text-5xl font-semibold">
            <CountUp start={0} end={163} duration={2.5} suffix="k+" />
          </h2>
          <p className="text-lg text-slate-300">Fitness enthusiasts connected through our platform</p>
        </div>
        <div className="w-1 bg-slate-800 mx-2"></div>
        <div className="flex flex-col gap-y-4">
          <h2 className="text-5xl font-semibold">
            <CountUp start={0} end={13} duration={2.5} suffix="+" />
          </h2>
          <p className="text-lg text-slate-300">Countries where GymFluencer is making an impact</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;

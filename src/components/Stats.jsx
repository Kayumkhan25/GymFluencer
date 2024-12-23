import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const Stats = () => {
  return (
    <section className="flex flex-col w-11/12 mx-auto justify-center gap-y-16 py-12" id="about">
      {/* Mission Section */}
      <div className="flex flex-col gap-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="text-3xl sm:text-4xl md:text-5xl mb-3 md:mb-5  font-bold leading-tight"
        >
          <h1>
            YOUR <span className="gradient">FITNESS.</span>
          </h1>
          <h1>
            OUR <span className="gradient">MISSION.</span>
          </h1>
        </motion.div>
        <p className="w-full sm:w-7/12 mx-auto text-lg sm:text-xl leading-relaxed text-slate-300">
          At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals.
          We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more
          motivating. Join us as we help you transform your fitness journey, one workout at a time.
        </p>
      </div>

      {/* Stats Section */}
      <motion.div
        className="flex flex-wrap sm:flex-nowrap text-center justify-around gap-8 sm:gap-4"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* Stat Item */}
        {[
          {
            value: 463,
            suffix: 'k+',
            text: 'Workouts logged and progress tracked every month',
          },
          {
            value: 163,
            suffix: 'k+',
            text: 'Fitness enthusiasts connected through our platform',
          },
          {
            value: 13,
            suffix: '+',
            text: 'Countries where GymFluencer is making an impact',
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col items-center gap-y-4 px-4"
          >
            <h2
              className="text-4xl sm:text-5xl font-semibold"
              aria-label={`${stat.value}${stat.suffix}`}
            >
              <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />
            </h2>
            <p className="text-lg text-slate-300">{stat.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;

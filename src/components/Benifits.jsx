import React from 'react';
import gym15 from '../assets/images/gym15.png';
import { MdOutlinePeople } from 'react-icons/md';
import { PiSmileyStickerBold } from 'react-icons/pi';
import { FaCircleRadiation } from 'react-icons/fa6';
import { BsStars } from 'react-icons/bs';
import { motion } from 'framer-motion';

const benifitialData = [
    {
        logo: MdOutlinePeople,
        heading: 'Effortless Workout Logging',
        content: 'Easily log your workouts and monitor your progress over time with our intuitive logging feature.',
    },
    {
        logo: BsStars,
        heading: 'Personalized Workout Plans',
        content: 'AI-powered workout plans tailored to your fitness level, goals, and progress.',
    },
    {
        logo: FaCircleRadiation,
        heading: 'Accurate Rep Counting',
        content: 'Count your reps accurately with our app, ensuring consistency and improved performance.',
    },
    {
        logo: PiSmileyStickerBold,
        heading: 'Calorie Calculation & Personalized Diet Plans',
        content: 'Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.',
    },
];

const Benifits = () => {
    return (
        <section id="benifits" className="relative flex flex-col items-center gap-10 py-16 px-4 lg:px-16">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
                className="text-3xl sm:text-5xl text-center leading-normal p-2 z-10"
            >
                Our <span className="gradient font-semibold">Benefits</span>
            </motion.div>

            {/* Subtitle and Description */}
            <div className="flex flex-col gap-y-4">
                <h2 className="text-2xl sm:text-3xl text-center text-slate-100 z-10">
                    Discover GymFluencer Benefits
                </h2>
                <p className="text-base sm:text-xl w-full sm:w-2/3 mx-auto text-slate-300 text-center mt-5 leading-loose z-10">
                    Unlock your full potential with GymFluencer, your personal fitness partner for progress and motivation.
                </p>
            </div>

            {/* Benefits Cards */}
            <motion.div
                initial={{ opacity: 0, rotateY: '90deg' }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 z-10 w-full max-w-7xl"
            >
                {benifitialData.map((data, index) => (
                    <div
                        key={index}
                        className="w-full h-full p-6 bg-black bg-opacity-70 rounded-lg shadow-md shadow-slate-700"
                    >
                        <div className="flex flex-col gap-4">
                            <p className="p-3 bg-slate-900 w-fit shadow-md shadow-slate-700 rounded-lg">
                                <data.logo size={28} className="text-white" />
                            </p>
                            <h3 className="text-lg sm:text-2xl gradient font-semibold">{data.heading}</h3>
                            <p className="text-sm sm:text-lg text-slate-200">{data.content}</p>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
                <img
                    src={gym15}
                    alt="gym"
                    className="h-full w-full object-cover opacity-60"
                />
            </div>
        </section>
    );
};

export default Benifits;

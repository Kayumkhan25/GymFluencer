import React from 'react';
import gym3 from '../assets/images/gym3.png';
import gym4 from '../assets/images/gym4.png';
import gym5 from '../assets/images/gym5.png';
import gym6 from '../assets/images/gym6.png';
import gym13 from '../assets/images/gym13.png';
import { motion } from 'framer-motion';

const Services = () => {
    const imageData = [
        { label: 'TRACK', url: gym5 },
        { label: 'ANALYZE', url: gym3 },
        { label: 'TRAIN', url: gym4 },
        { label: 'CONNECT', url: gym6 },
        { label: 'CHALLENGE', url: gym13 },
    ];

    return (
        <section id="services" className="flex flex-col justify-center items-center gap-y-16 py-16">
            {/* Title Section */}
            <div className="flex flex-col gap-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="text-4xl sm:text-6xl font-bold"
                >
                    OUR <span className="gradient">SERVICES</span>
                </motion.div>
                <p className="w-full sm:w-3/5 mx-auto text-slate-300 text-lg sm:text-xl p leading-loose">
                    GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 w-full">
                {imageData.map((image, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, rotateX: '90deg' }}
                        whileInView={{ opacity: 1, rotateX: 0 }}
                        transition={{ duration: 2 }}
                        className="relative flex justify-center items-center h-[18rem] sm:h-[22rem] lg:h-[48rem] overflow-hidden rounded-lg shadow-lg"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={image.url}
                                alt={image.label}
                                className="h-full w-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
                        </div>

                        {/* Label */}
                        <h3 className="relative text-2xl sm:text-4xl font-bold text-white z-10 tracking-wide">
                            {image.label}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;

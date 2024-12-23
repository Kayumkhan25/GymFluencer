import React, { useEffect, useState } from 'react';
import gym16 from '../assets/images/gym16.png';
import gym17 from '../assets/images/gym17.png';
import gym18 from '../assets/images/gym18.png';
import gym19 from '../assets/images/gym19.png';
import { motion } from 'framer-motion';

const Personalized = () => {
    const [bgImage, setBgImage] = useState(gym16);
    const [animationKey, setAnimationKey] = useState(0); // To trigger re-render and animation

    const fills = [gym16, gym17, gym18, gym19];

    useEffect(() => {
        const interval = setInterval(() => {
            const random = fills[Math.floor(Math.random() * fills.length)];
            setBgImage(random);
            setAnimationKey((prev) => prev + 1); // Change key to trigger animation
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col gap-16 mt-16 w-full">
            <div className="w-11/12 mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-10">
                {/* Text Section */}
                <div className="flex flex-col gap-y-5 w-full lg:w-5/12 p-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="text-2xl md:text-4xl leading-snug p-2"
                    >
                        YOUR PERSONALIZED{' '}
                        <span className="gradient font-semibold">
                            FITNESS HUB
                        </span>
                    </motion.div>
                    <div className="text-sm lg:text-lg flex flex-col gap-5 p-1 text-slate-300">
                        <p>
                            Personalized workout routines tailored to your goals
                            and preferences.
                        </p>
                        <p>
                            Get expert guidance with virtual coaching sessions,
                            available anytime, anywhere.
                        </p>
                        <p>
                            Track your fitness journey with detailed analytics,
                            goal setting, and achievements.
                        </p>
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full lg:w-5/12 p-1 transition-all duration-100">
                    <img
                        key={animationKey}
                        src={bgImage}
                        alt="Personalized Fitness"
                        className="w-full lg:w-[37rem] h-auto rounded-md shadow-lg shadow-slate-800 slide-top opacity-90"
                    />
                </div>
            </div>
        </section>
    );
};

export default Personalized;

import React, { useState } from 'react';
import gym1 from '../assets/images/gym1.jpg';
import gym7 from '../assets/images/gym7.png';
import gym8 from '../assets/images/gym8.png';
import gym15 from '../assets/images/gym15.png';
import gym17 from '../assets/images/gym17.png';
import gym21 from '../assets/images/gym21.jpg';
import gym18 from '../assets/images/gym18.png';
import gym16 from '../assets/images/gym16.png';
import { LuPhoneCall } from 'react-icons/lu';
import { GrLocation } from 'react-icons/gr';
import { motion } from 'framer-motion';

const gyms = [
  { id: 1, name: 'Edge Fitness Seawoods', number: '+91 3215467890', address: 'V368+53 Las Colinas, Irving', image: gym7, map: 'https://www.google.com/maps?q=V368+53+Las+Colinas,+Irving' },
  { id: 2, name: 'The Square Gym', number: '+91 3215467890', address: 'HC 77 Box 1A, Budville, NM 87007', image: gym1, map: 'https://www.google.com/maps?q=HC+77+Box+1A,+Budville,+NM+87007' },
  { id: 3, name: 'Arnolds Total Fitness', number: '+91 1234567890', address: '1050 W Hampden Ave Ste 100', image: gym8, map: 'https://www.google.com/maps?q=1050+W+Hampden+Ave+Ste+100' },
  { id: 4, name: 'Ozone The Gym', number: '+91 1234567890', address: '2043 S 3rd Dr, Phoenix, AZ 85003', image: gym17, map: 'https://www.google.com/maps?q=2043+S+3rd+Dr,+Phoenix,+AZ+85003' },
  { id: 5, name: 'Yuva Fitness', number: '+91 1234567890', address: '1921 Wichman Rd, Moore', image: gym21, map: 'https://www.google.com/maps?q=1921+Wichman+Rd,+Moore' },
  { id: 6, name: 'Hydropower Gym', number: '+91 3215460798', address: 'Blvd, Hayward, CA 94545', image: gym18, map: 'https://www.google.com/maps?q=28345+Industrial+Blvd,+Hayward,+CA+94545' },
  { id: 7, name: 'Iron Fitness', number: '+91 3215460798', address: '4th St NW, Washington, DC 20009', image: gym16, map: 'https://www.google.com/maps?q=2801+14th+St+NW,+Washington,+DC+20009' },
  { id: 8, name: 'Physc Gym Nerul 24/7', number: '+91 3215460798', address: 'Nerul, Navi Mumbai, 400706', image: gym15, map: 'https://www.google.com/maps?q=Nerul,+Navi+Mumbai,+Maharashtra,+400706' },
];

const Location = () => {
  const [selectedGym, setSelectedGym] = useState(null);

  const handleSelectGym = (gym) => {
    setSelectedGym(gym);
  };

  return (
    <section id="location" className="w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className="text-center flex flex-col gap-y-5 p-2"
      >
        <h3 className="text-3xl lg:text-4xl sm:text-4xl leading-normal p-2 font-semibold uppercase">
          Find your <span className="gradient">nearest gym</span>
        </h3>
        <p className="text-lg lg:text-xl">
          Easily discover gyms near your location to kickstart your fitness journey today!
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-between items-start gap-5 w-full sm:w-11/12 mt-10 mx-auto">
        {/* Scrollable Gym List */}
        <div
          className="overflow-y-scroll h-[30rem] md:h-screen w-full sm:w-2/5 border border-gray-600 rounded-lg p-4"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#6b7280 #1f2937' }}
        >
          {gyms.map((gym) => (
            <div
              key={gym.id}
              onClick={() => handleSelectGym(gym)}
              className={`p-1 rounded-lg border mb-4 cursor-pointer transition-all duration-300 ${
                selectedGym?.id === gym.id ? 'bg-purple-800 text-white' : 'bg-gray-900'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-x-4 group">
                <div className="w-full sm:w-28 h-28 sm:h-36 bg-gray-800 flex justify-center items-center text-gray-300 overflow-hidden rounded-lg transition-transform duration-300 transform group-hover:scale-110">
                  {gym.image ? (
                    <img
                      src={gym.image}
                      alt={gym.name}
                      className="w-full h-full object-fill rounded-lg"
                    />
                  ) : (
                    <span className="text-sm">No Image</span>
                  )}
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 p-2 sm:p-4 text-slate-300">
                  <h2 className="text-base sm:text-xl text-white mb-1 sm:mb-2">{gym.name}</h2>
                  <p className="flex gap-1 items-center text-sm sm:text-base">
                    <LuPhoneCall /> {gym.number}
                  </p>
                  <p className="flex gap-1 items-center text-sm sm:text-base">
                    <GrLocation /> {gym.address}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="border border-slate-800 w-full p-5 sm:w-80 h-60 sm:h-80 flex items-center justify-center bg-gray-900">
          {selectedGym ? (
            <a
              href={selectedGym.map}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500  underline text-center"
            >
              Click here to open the map for {selectedGym.name}
            </a>
          ) : (
            <p className="text-gray-500">Select a gym to view its location on the map</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Location;

import React, { useContext } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import {
  FaUserFriends,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaSearchLocation
} from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';  // darkMode context থেকে নিতে

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

const fadeUpScaleVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const AboutUsC = () => {
  const { darkMode } = useContext(AuthContext); // darkMode নিলাম

  return (
    <section className={`py-16 px-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-4 relative inline-block ${darkMode ? 'text-primary' : 'text-primary'}`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
          }}
        >
          About <span className="text-secondary">Us</span>
          {/* underline */}
          <motion.div
            layoutId="underline"
            className={`absolute bottom-0 left-0 w-full h-1 rounded-full mt-1 ${darkMode ? 'bg-secondary' : 'bg-secondary'}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </motion.h2>

        {/* Subtitle Typewriter */}
        <motion.h3
          className={`text-lg md:text-xl font-semibold mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.3, duration: 0.7, ease: "easeOut" } }
          }}
        >
          <Typewriter
            words={[
              'Find your perfect roommate.',
              'Secure, Trusted, Personalized.',
              'Live Better Together.'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1800}
          />
        </motion.h3>

        {/* Description */}
        <motion.p
          className={`max-w-3xl mx-auto text-base md:text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { delay: 0.6, duration: 0.7, ease: "easeOut" } }
          }}
        >
          Our platform is designed to help you find the ideal roommate who matches your{' '}
          <span className="text-primary font-medium">lifestyle</span>,{' '}
          <span className="text-primary font-medium">budget</span>, and{' '}
          <span className="text-primary font-medium">location</span>. Whether you’re a student, a professional, or someone relocating — we ensure a{' '}
          <span className="text-secondary font-semibold">safe</span>,{' '}
          <span className="text-secondary font-semibold">trustworthy</span> and{' '}
          <span className="text-secondary font-semibold">simple</span> experience.
        </motion.p>

        {/* Features */}
        <motion.div
          className="grid md:grid-cols-4 gap-6 mt-14 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[{
            icon: <FaUserFriends className={`text-3xl mb-4 ${darkMode ? 'text-primary' : 'text-primary'}`} />,
            title: "Community Focused",
            desc: "We value compatibility, shared interests, and peaceful co-living."
          }, {
            icon: <FaShieldAlt className={`text-3xl mb-4 ${darkMode ? 'text-primary' : 'text-primary'}`} />,
            title: "Secure Profiles",
            desc: "Verified users and privacy-first features for safe matching."
          }, {
            icon: <FaMapMarkedAlt className={`text-3xl mb-4 ${darkMode ? 'text-primary' : 'text-primary'}`} />,
            title: "Local Listings",
            desc: "Find roommates nearby — from cities to towns, we cover it all."
          }, {
            icon: <FaSearchLocation className={`text-3xl mb-4 ${darkMode ? 'text-primary' : 'text-primary'}`} />,
            title: "Smart Search",
            desc: "Filter by rent, location, preferences, and more — easily."
          }].map(({icon, title, desc}, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl shadow-md p-6 transition cursor-pointer
                ${darkMode 
                  ? 'bg-gray-800 text-gray-300 hover:bg-blue-700 hover:shadow-lg' 
                  : 'bg-white text-gray-900 hover:bg-blue-300 hover:shadow-lg'}`}
              variants={fadeUpScaleVariant}
              whileHover={{ scale: 1.05, boxShadow: darkMode ? "0 10px 20px rgba(59,130,246,0.5)" : "0 10px 20px rgba(59,130,246,0.3)" }}
            >
              {icon}
              <h4 className="text-lg font-semibold mb-2">{title}</h4>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsC;

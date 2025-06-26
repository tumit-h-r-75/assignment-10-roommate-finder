import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FaHeadset, FaShieldAlt, FaComments, FaRegClock } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    }
  }
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const SupportSection = () => {
  const { darkMode } = useContext(AuthContext);

  const supportFeatures = [
    {
      icon: <FaHeadset className="text-4xl text-primary mb-4" />,
      title: "24/7 Customer Support",
      desc: "Our dedicated team is available around the clock to help you with any questions or issues."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary mb-4" />,
      title: "Privacy & Security",
      desc: "We prioritize your privacy and ensure that all your data is protected with top-notch security."
    },
    {
      icon: <FaComments className="text-4xl text-primary mb-4" />,
      title: "Personalized Assistance",
      desc: "Get tailored support and guidance to find the best roommate match for your lifestyle."
    },
    {
      icon: <FaRegClock className="text-4xl text-primary mb-4" />,
      title: "Fast Response Times",
      desc: "We guarantee quick replies to your queries, so you never have to wait long."
    }
  ];

  return (
    <section className={`${darkMode ? ' text-white' : ' text-gray-900'} py-16 px-6 sm:px-12`}>
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-6 relative inline-block"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
          }}
        >
          Need Help? <span className="text-secondary">We’re Here</span>
          <motion.div
            layoutId="underline"
            className="absolute bottom-0 left-0 w-full h-1 bg-secondary rounded-full mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          />
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className={`max-w-2xl mx-auto mb-12 text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          We’re committed to making your roommate search easy, safe, and personalized. Reach out to us anytime.
        </motion.p>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {supportFeatures.map(({ icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              className={`rounded-xl shadow-md p-6 cursor-pointer
                ${darkMode
                  ? 'bg-gray-800 text-gray-200 hover:bg-blue-700 hover:shadow-lg'
                  : 'bg-white text-gray-900 hover:bg-blue-300 hover:shadow-lg'}
              `}
              variants={fadeUpVariant}
              whileHover={{ scale: 1.05, boxShadow: darkMode ? "0 10px 20px rgba(59,130,246,0.5)" : "0 10px 20px rgba(59,130,246,0.3)" }}
            >
              <div className='flex justify-center items-center'>
                {icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportSection;

import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';
import secondAnimation from '../assets/review.json';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AuthContext } from '../context/AuthContext';

const SuccessStories = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section
      className={`my-20 px-4 max-w-7xl mx-auto text-center py-16 rounded-3xl  transition-colors duration-500 ${
        darkMode ? ' text-white' : ' text-gray-900'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold mb-14">
        Real <span className="text-primary">Success Stories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Story 1 */}
        <Fade direction="left" triggerOnce>
          <div
            className={`rounded-2xl p-6 transition-transform transform group border backdrop-blur-md
              ${
                darkMode
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-white border-gray-200 text-gray-900 hover:shadow-xl'
              }
              cursor-pointer shadow-md hover:-translate-y-1`}
            data-tooltip-id="story1"
            data-tooltip-content="Click to see how this user found their perfect roommate!"
            role="button"
            tabIndex={0}
            aria-describedby="story1"
          >
            <Lottie animationData={animationData} loop className="h-56 mx-auto" />
            <h3
              className={`text-2xl font-bold mt-6 mb-2 ${
                darkMode ? 'text-primary' : 'text-primary'
              }`}
            >
              Perfect Match Found!
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
              One of our users successfully found their ideal roommate based on shared lifestyle preferences.
            </p>
          </div>
        </Fade>

        {/* Story 2 */}
        <Fade direction="right" triggerOnce>
          <div
            className={`rounded-2xl p-6 transition-transform transform group border backdrop-blur-md
              ${
                darkMode
                  ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                  : 'bg-white border-gray-200 text-gray-900 hover:shadow-xl'
              }
              cursor-pointer shadow-md hover:-translate-y-1`}
            data-tooltip-id="story2"
            data-tooltip-content="See the amazing stories our users are sharing!"
            role="button"
            tabIndex={0}
            aria-describedby="story2"
          >
            <Lottie animationData={secondAnimation} loop className="h-56 mx-auto" />
            <h3
              className={`text-2xl font-bold mt-6 mb-2 ${
                darkMode ? 'text-primary' : 'text-primary'
              }`}
            >
              Shared Stories, Real Impact
            </h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
              Many users shared their journey of finding safe and compatible roommates through our platform.
            </p>
          </div>
        </Fade>
      </div>

      {/* Tooltips */}
      <Tooltip id="story1" className="z-50 bg-black text-white px-3 py-1 rounded shadow" />
      <Tooltip id="story2" className="z-50 bg-black text-white px-3 py-1 rounded shadow" />
    </section>
  );
};

export default SuccessStories;

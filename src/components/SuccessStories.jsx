import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json';
import secondAnimation from '../assets/review.json';
import { Fade } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { AuthContext } from '../context/AuthContext';

const SuccessStories = () => {
  const { darkMode } = useContext(AuthContext); // darkMode তুমি চাইলে conditionally style এ ব্যবহার করতে পারো

  return (
    <section
      className={`my-20 px-4 max-w-6xl mx-auto text-center py-12 rounded-3xl shadow-inner ${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
      }`}
    >
      <h2 className="text-4xl font-extrabold mb-12">
        Real <span className="text-primary">Success Stories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Story 1 */}
        <Fade direction="left" triggerOnce>
          <div
            className="border border-gray-300 rounded-2xl shadow-sm hover:shadow-2xl p-6 transition duration-300 relative group cursor-pointer"
            data-tooltip-id="story1"
            data-tooltip-content="Click to see how this user found their perfect roommate!"
            role="button"
            tabIndex={0}
            aria-describedby="story1"
          >
            <Lottie animationData={animationData} loop={true} className="h-60 mx-auto" />
            <h3 className="text-xl font-bold mt-4 mb-2 text-primary">Perfect Match Found!</h3>
            <p>One of our users successfully found their ideal roommate based on shared lifestyle preferences.</p>
          </div>
        </Fade>

        {/* Story 2 */}
        <Fade direction="right" triggerOnce>
          <div
            className="border border-gray-300 rounded-2xl shadow-sm hover:shadow-2xl p-6 transition duration-300 relative group cursor-pointer"
            data-tooltip-id="story2"
            data-tooltip-content="See the amazing stories our users are sharing!"
            role="button"
            tabIndex={0}
            aria-describedby="story2"
          >
            <Lottie animationData={secondAnimation} loop={true} className="h-60 mx-auto" />
            <h3 className="text-xl font-bold mt-4 mb-2 text-primary">Shared Stories, Real Impact</h3>
            <p>Many users shared their journey of finding safe and compatible roommates through our platform.</p>
          </div>
        </Fade>
      </div>

      {/* Tooltips */}
      <Tooltip id="story1" />
      <Tooltip id="story2" />
    </section>
  );
};

export default SuccessStories;

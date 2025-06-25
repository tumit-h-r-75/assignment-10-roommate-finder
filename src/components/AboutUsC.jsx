import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Zoom, Fade, Slide } from 'react-awesome-reveal';

const AboutUsC = () => {
  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <Zoom triggerOnce>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary drop-shadow-sm">
            About <span className="text-secondary">Us</span>
          </h2>
        </Zoom>

        {/* Subtitle Typewriter */}
        <Fade delay={200} triggerOnce>
          <h3 className="text-lg md:text-xl font-semibold mb-6">
            <Typewriter
              words={[
                'We help you find the perfect roommate.',
                'Safe, Secure, Reliable.'
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>
        </Fade>

        {/* Description with Slide animation */}
        <Slide direction="up" triggerOnce>
          <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our platform helps you find the right roommate based on your <span className="text-primary font-medium">lifestyle</span>, <span className="text-primary font-medium">budget</span>, and <span className="text-primary font-medium">location</span>. 
            We ensure a <span className="text-secondary font-semibold">safe</span>, <span className="text-secondary font-semibold">transparent</span>, and <span className="text-secondary font-semibold">trustworthy</span> roommate-finding experience.
          </p>
        </Slide>
      </div>
    </section>
  );
};

export default AboutUsC;

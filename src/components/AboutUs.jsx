import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const AboutUs = () => {
    return (
        <div className="my-16 text-center">
            <h2 className="text-3xl font-bold mb-4">About <span className="text-primary">Us</span></h2>
            <h3 className="text-xl font-semibold">
                <Typewriter
                    words={['We help you find the perfect roommate.', 'Safe, Secure, Reliable.']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </h3>
            <p className="max-w-2xl mx-auto mt-4">
                Our platform connects you with compatible roommates based on your lifestyle, budget, and location. We believe in safe and transparent roommate finding.
            </p>
        </div>
    );
};

export default AboutUs;
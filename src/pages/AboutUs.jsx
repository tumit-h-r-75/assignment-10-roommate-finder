import React from 'react';
import AboutUsC from '../components/AboutUsC';
import { Slide } from 'react-awesome-reveal';

const AboutUs = () => {
    return (
        <div>
             {/* About Us */}
            <section className="space-y-5">
                <Slide direction="left" triggerOnce>
                    <AboutUsC />
                </Slide>
            </section>

        </div>
    );
};

export default AboutUs;
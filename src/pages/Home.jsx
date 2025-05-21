import React, { useContext } from 'react';
import Slider from '../components/Slider';
import { Link, useLoaderData } from 'react-router-dom';
import Loader from '../components/Loader';
import AboutUs from '../components/AboutUs';
import SuccessStories from '../components/SuccessStories';
import { Typewriter } from 'react-simple-typewriter';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Lottie from 'lottie-react';
import animationData from '../assets/roommate.json';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const roommate = useLoaderData();
        const { darkMode } = useContext(AuthContext);
    

    if (!roommate || roommate.length === 0) {
        return <Loader />;
    }

    const availableRoommates = roommate.filter(roommate => roommate.availability === "Available");
    const initialRoommate = availableRoommates.slice(0, 6);

    return (
        <div>
            {/* Hero Slider */}
            <section className='w-full'>
                <Slider />
            </section>

            {/* Hero Typewriter + Lottie */}
            <section className="max-w-7xl mx-auto text-center mt-16 px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
                    <Fade cascade damping={0.2} direction="left" triggerOnce>
                        <div className="flex-1">
                            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-snug">
                                <Typewriter
                                    words={[
                                        'Find Your Perfect Roommate',
                                        'Live Comfortably',
                                        'Connect With People Like You',
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </h2>
                            <p className={`text-lg ${darkMode?'text-white':'text-gray-600'}`}>
                                Your journey to a better living experience begins here.
                            </p>
                        </div>
                    </Fade>

                    <Fade direction="right" delay={300} triggerOnce>
                        <div className="flex-1">
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                className="h-[300px] md:h-[400px]"
                            />
                        </div>
                    </Fade>
                </div>
            </section>

            {/* Featured Roommates Section */}
            <section className="max-w-7xl mx-auto my-16 px-4">
                <Zoom triggerOnce>
                    <h2 className="text-3xl font-bold mb-10 text-center text-primary">
                        🎯 Featured Roommates
                    </h2>
                </Zoom>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialRoommate.map((roommate, index) => (
                        <Fade
                            key={roommate._id}
                            direction="up"
                            delay={index * 100}
                            triggerOnce
                        >
                            <div
                                className={`${darkMode?'bg-gray-700 *:text-white':'bg-white'} rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]`}
                                data-tooltip-id={`tooltip-${roommate._id}`}
                                data-tooltip-content="Click to view details"
                            >
                                <div className="relative">
                                    <img
                                        src={roommate.image}
                                        alt={roommate.name}
                                        className="w-full h-52 object-cover"
                                    />
                                    <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        {roommate.availability}
                                    </span>
                                </div>

                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">
                                            {roommate.name}
                                        </h3>
                                        <p className="">
                                            <span className="font-medium text-black">Location:</span> {roommate.location}
                                        </p>
                                        <p className="">
                                            <span className="font-medium text-black">Budget:</span> ${roommate.rent}
                                        </p>
                                        <p className="">
                                            <span className="font-medium text-black">Lifestyle:</span> {roommate.lifestyle}
                                        </p>
                                    </div>

                                    <div className="mt-5">
                                        <Link
                                            to={`/details/${roommate._id}`}
                                            className="block text-center bg-primary text-white font-semibold py-2 rounded-xl hover:bg-primary-focus transition-all duration-300"
                                        >
                                            See More
                                        </Link>
                                    </div>
                                </div>

                                {/* Tooltip */}
                                <Tooltip
                                    id={`tooltip-${roommate._id}`}
                                    style={{
                                        backgroundColor: "#1e293b",
                                        color: "#fff",
                                        fontSize: "0.875rem",
                                        padding: "8px 12px",
                                        borderRadius: "6px",
                                    }}
                                />
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            {/* About Us */}
            <section className="space-y-5">
                <Slide direction="left" triggerOnce>
                    <AboutUs />
                </Slide>
            </section>

            {/* Success Stories */}
            <section className="mb-10">
                <Slide direction="right" triggerOnce>
                    <SuccessStories />
                </Slide>
            </section>
        </div>
    );
};

export default Home;

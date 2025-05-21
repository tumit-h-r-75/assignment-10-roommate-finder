import React from 'react';
import Slider from '../components/Slider';
import { Link, useLoaderData } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = () => {
    const roommate = useLoaderData();

    if (!roommate || roommate.length === 0) {
        return <Loader />;
    }

    const availableRoommates = roommate.filter(roommate => roommate.availability === "Available");
    const initialRoommate = availableRoommates.slice(0, 6);

    return (
        <div>
            <section>
                <Slider />
            </section>

            <section className="max-w-7xl mx-auto my-10 px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-primary">Featured Roommates</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialRoommate.map((roommate) => (
                        <div key={roommate._id} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
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
                                    <h3 className="text-xl font-bold text-primary mb-2">{roommate.name}</h3>
                                    <p className="text-gray-600"><span className="font-medium text-black">Location:</span> {roommate.location}</p>
                                    <p className="text-gray-600"><span className="font-medium text-black">Budget:</span> ${roommate.rent}</p>
                                    <p className="text-gray-600"><span className="font-medium text-black">Lifestyle:</span> {roommate.lifestyle}</p>
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
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

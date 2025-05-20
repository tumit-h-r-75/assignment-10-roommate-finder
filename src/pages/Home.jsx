import React from 'react';
import Slider from '../components/Slider';
import { Link, useLoaderData } from 'react-router';

const Home = () => {

    const initialRoommate = useLoaderData();
    console.log(initialRoommate);


    return (
        <div>
            <section>
                <Slider></Slider>
            </section>
             <section className="max-w-7xl mx-auto my-10 px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-primary">Featured Roommates</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {initialRoommate.map((roommate) => (
                        <div key={roommate._id} className="bg-base-100 rounded-xl shadow p-4 flex flex-col justify-between">
                            <img
                                src={roommate.image}
                                alt={roommate.name}
                                className="w-full h-52 object-cover rounded-xl mb-4"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-primary">{roommate.name}</h3>
                                <p><span className="font-medium">Location:</span> {roommate.location}</p>
                                <p><span className="font-medium">Budget:</span> ${roommate.rent}</p>
                                <p><span className="font-medium">Lifestyle:</span> {roommate.lifestyle}</p>
                            </div>
                            <Link to={`/details/${roommate._id}`} className="btn btn-primary mt-4">
                                See More
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
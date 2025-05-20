import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';

const BrowseListings = () => {
    const allRoommate = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Browse Roommate Listings</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {allRoommate?.map((post) => (
                    <div
                        key={post._id}
                        className="bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 p-5 space-y-3"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={post.image}
                                alt="user"
                                className="w-14 h-14 rounded-full border-2 border-primary"
                            />
                            <div>
                                <h3 className="text-xl font-semibold">{post.userName}</h3>
                                <p className="text-sm text-gray-500">{post.userEmail}</p>
                            </div>
                        </div>

                        <h2 className="text-lg font-bold text-primary">{post.title}</h2>
                        <p><span className="font-medium">Location:</span> {post.location}</p>
                        <p><span className="font-medium">Room Type:</span> {post.roomType}</p>
                        <p><span className="font-medium">Rent:</span> ${post.rent}</p>

                        <p className="text-sm text-gray-600">
                            {post.description.length > 80
                                ? post.description.slice(0, 80) + "..."
                                : post.description}
                        </p>

                        <div className="flex justify-between items-center">
                            <span className={`badge ${post.availability === 'Available' ? 'badge-success' : 'badge-error'}`}>
                                {post.availability}
                            </span>
                            <Link to={`/details/${post._id}`}>
                                <button className="btn btn-primary btn-sm">See More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BrowseListings;

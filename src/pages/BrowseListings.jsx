import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Loader from '../components/Loader';

const BrowseListings = () => {
    const allRoommate = useLoaderData();

    if (!allRoommate || allRoommate.length === 0) {
        return <Loader />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-primary">
                Browse Roommate Listings
            </h2>

            <div className="overflow-x-auto shadow rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100 text-sm text-gray-700">
                        <tr>
                            <th className="px-4 py-3 text-left">#</th>
                            <th className="px-4 py-3 text-left">User</th>
                            <th className="px-4 py-3 text-left">Title</th>
                            <th className="px-4 py-3 text-left">Location</th>
                            <th className="px-4 py-3 text-left">Room Type</th>
                            <th className="px-4 py-3 text-left">Rent</th>
                            <th className="px-4 py-3 text-left">Availability</th>
                            <th className="px-4 py-3 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                        {allRoommate.map((post, index) => (
                            <tr key={post._id} className="hover:bg-gray-50">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={post.image}
                                            alt={post.userName}
                                            className="w-10 h-10 rounded-full border border-primary object-cover"
                                        />
                                        <div className="min-w-[100px]">
                                            <p className="font-medium truncate">{post.userName}</p>
                                            <p className="text-xs text-gray-500 truncate">{post.userEmail}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3">{post.title}</td>
                                <td className="px-4 py-3">{post.location}</td>
                                <td className="px-4 py-3">{post.roomType}</td>
                                <td className="px-4 py-3">${post.rent}</td>
                                <td className="px-4 py-3">
                                    <span
                                        className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                            post.availability === 'Available'
                                                ? 'bg-green-100 text-green-800'
                                                : 'bg-red-100 text-red-800'
                                        }`}
                                    >
                                        {post.availability}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <Link to={`/details/${post._id}`}>
                                        <button className="btn btn-sm btn-primary">See More</button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseListings;

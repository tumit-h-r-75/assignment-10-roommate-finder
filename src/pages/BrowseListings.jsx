import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Loader from '../components/Loader';

const BrowseListings = () => {
    const allRoommate = useLoaderData();

    if (!allRoommate || allRoommate.length === 0) {
        return <Loader></Loader>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Browse Roommate Listings</h2>

            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200">
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>User</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Room Type</th>
                            <th>Rent</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allRoommate?.map((post, index) => (
                            <tr key={post._id} className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={post.image}
                                            alt={post.userName}
                                            className="w-10 h-10 rounded-full border border-primary"
                                        />
                                        <div>
                                            <p className="font-medium">{post.userName}</p>
                                            <p className="text-xs text-gray-500">{post.userEmail}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>{post.roomType}</td>
                                <td>${post.rent}</td>
                                <td>
                                    <span
                                        className={`badge ${post.availability === 'Available' ? 'badge-success' : 'badge-error'}`}
                                    >
                                        {post.availability}
                                    </span>
                                </td>
                                <td>
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

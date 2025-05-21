import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const MyListings = () => {
    const { user } = useContext(AuthContext);
    console.log(user);

    const [myListings, setMyListings] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`https://roommate-finder-server.vercel.app/roommate/user/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyListings(data));
        }
    }, [user]);

    const handleDelete = async (id) => {
        const confirmation = confirm('Are you sure you want to delete this post?');
        if (!confirmation) return;

        const res = await fetch(`https://roommate-finder-server.vercel.app/roommate/${id}`, {
            method: 'DELETE'
        });

        const result = await res.json();
        if (result.deletedCount > 0) {
            alert('Deleted successfully!');
            setMyListings(prev => prev.filter(item => item._id !== id));
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-semibold mb-4">My Listings</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th>Image</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myListings.map(post => (
                            <tr key={post._id}>
                                <td>
                                    <img src={post.image} alt="roommate" className="w-14 h-14 rounded" />
                                </td>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>{post.rent} BDT</td>
                                <td className="flex gap-2">
                                    <Link to={`/update/${post._id}`}>
                                        <button className="btn btn-sm btn-outline btn-primary">Update</button>
                                    </Link>
                                    <button onClick={() => handleDelete(post._id)} className="btn btn-sm btn-outline btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {myListings.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-400">No listings found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;

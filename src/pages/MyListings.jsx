import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Loader from '../components/Loader';
import Swal from 'sweetalert2';

const MyListings = () => {
    const { user } = useContext(AuthContext);
    const [myListings, setMyListings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            setLoading(true);
            fetch(`https://roommate-finder-server.vercel.app/roommate/user/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setMyListings(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching user listings:", error);
                    setLoading(false);
                });
        }
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this post?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://roommate-finder-server.vercel.app/roommate/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your listing has been deleted.",
                                icon: "success"
                            });

                            const remainingListings = myListings.filter(listing => listing._id !== id);
                            setMyListings(remainingListings);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting listing:", error);
                        Swal.fire({
                            title: "Error!",
                            text: "Failed to delete the listing.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    if (loading) return <Loader />;

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6 text-center">My Listings</h1>
            <div className="overflow-x-auto rounded-lg border shadow">
                <table className="min-w-full table-auto text-sm text-left whitespace-nowrap">
                    <thead className="bg-base-200 text-base-content">
                        <tr>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Location</th>
                            <th className="px-4 py-3">Rent</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {myListings.length > 0 ? (
                            myListings.map(post => (
                                <tr key={post._id} className="hover:bg-base-100 transition">
                                    <td className="px-4 py-3">
                                        <img
                                            src={post.image}
                                            alt="roommate"
                                            className="w-16 h-16 object-cover rounded-lg border"
                                        />
                                    </td>
                                    <td className="px-4 py-3 max-w-[150px] truncate">{post.title}</td>
                                    <td className="px-4 py-3 max-w-[120px] truncate">{post.location}</td>
                                    <td className="px-4 py-3 font-medium">{post.rent} BDT</td>
                                    <td className="px-4 py-3">
                                        <div className="flex flex-wrap gap-2">
                                            <Link to={`/updateList/${post._id}`}>
                                                <button className="btn btn-sm btn-outline btn-primary">Update</button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(post._id)}
                                                className="btn btn-sm btn-outline btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-500">
                                    No listings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;

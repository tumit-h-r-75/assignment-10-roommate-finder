import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const UpdateListing = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        title: data.title || '',
        location: data.location || '',
        rent: data.rent || '',
        roomType: data.roomType || '',
        lifestyle: data.lifestyle || '',
        description: data.description || '',
        contact: data.contact || '',
        availability: data.availability || '',
        image: data.image || '',
        userName: user?.displayName || '',
        userEmail: user?.email || '',
    });

    const handleUpdate = e => {
        e.preventDefault();

        fetch(`https://roommate-finder-server.vercel.app/roommate/${data._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Listing updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/my-listings")
                }
            })
    };

    return (
        <div className="max-w-3xl mx-auto my-10 p-6 bg-base-100 shadow rounded">
            <h2 className="text-2xl font-bold mb-6 text-center text-primary">Update Roommate Post</h2>

            <form onSubmit={handleUpdate} className="space-y-4">
                <input
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Title"
                    required
                    className="input input-bordered w-full"
                />
                <input
                    name="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Location"
                    required
                    className="input input-bordered w-full"
                />
                <input
                    name="rent"
                    value={formData.rent}
                    onChange={(e) => setFormData({ ...formData, rent: e.target.value })}
                    placeholder="Rent Amount"
                    required
                    className="input input-bordered w-full"
                />
                <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                    required
                    className="select select-bordered w-full"
                >
                    <option value="">Select Room Type</option>
                    <option value="Single">Single</option>
                    <option value="Shared">Shared</option>
                </select>
                <input
                    name="lifestyle"
                    value={formData.lifestyle}
                    onChange={(e) => setFormData({ ...formData, lifestyle: e.target.value })}
                    placeholder="Lifestyle Preferences"
                    required
                    className="input input-bordered w-full"
                />
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Description"
                    required
                    className="textarea textarea-bordered w-full"
                />
                <input
                    name="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="Contact Info"
                    required
                    className="input input-bordered w-full"
                />
                <select
                    name="availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    required
                    className="select select-bordered w-full"
                >
                    <option value="">Availability</option>
                    <option value="Available">Available</option>
                    <option value="Not Available">Not Available</option>
                </select>
                <input
                    name="image"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="Image URL"
                    required
                    className="input input-bordered w-full"
                />
                <input
                    name="userName"
                    value={formData.userName}
                    readOnly
                    className="input input-bordered w-full bg-gray-100"
                />
                <input
                    name="userEmail"
                    value={formData.userEmail}
                    readOnly
                    className="input input-bordered w-full bg-gray-100"
                />

                <button type="submit" className="btn btn-primary w-full">Update Listing</button>
            </form>
        </div>
    );
};

export default UpdateListing;

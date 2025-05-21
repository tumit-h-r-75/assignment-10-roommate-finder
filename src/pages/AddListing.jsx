import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const AddListing = () => {
    const { user } = useContext(AuthContext);

    const handleAddListing = async (e) => {
        e.preventDefault();
        const form = e.target;

        const newListing = {
            title: form.title.value,
            location: form.location.value,
            rent: form.rent.value,
            roomType: form.roomType.value,
            lifestyle: form.lifestyle.value,
            description: form.description.value,
            contact: form.contact.value,
            availability: form.availability.value,
            userEmail: user?.email,
            userName: user?.displayName,
            image: form.image.value,
            likedBy: [],
            likeCount: 0,
        };

        fetch("https://roommate-finder-server.vercel.app/roommate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListing),
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Roommate added successfully!",
                        icon: "success",
                        confirmButtonColor: "#176AE5"
                    });
                    form.reset();
                }
            });
    }

    return (
        <div className="max-w-2xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
            {/* Title with Zoom */}
            <Zoom triggerOnce>
                <h2 className="text-3xl font-extrabold mb-6 text-primary text-center drop-shadow-md">
                    Add to Find Roommate
                </h2>
            </Zoom>

            {/* Form with Fade */}
            <Fade cascade damping={0.1} triggerOnce>
                <form onSubmit={handleAddListing} className="space-y-5">

                    <input name="title" placeholder="Title (e.g. Looking for roommate in NYC)" required className="input input-bordered w-full" />
                    <input name="location" placeholder="Location" required className="input input-bordered w-full" />
                    <input name="rent" placeholder="Rent Amount (e.g. $500/month)" required className="input input-bordered w-full" />

                    <select name="roomType" required className="select select-bordered w-full">
                        <option value="">Select Room Type</option>
                        <option value="Single">Single</option>
                        <option value="Shared">Shared</option>
                    </select>

                    <input name="lifestyle" placeholder="Lifestyle Preferences (e.g. Pets, Smoking, Night Owl)" required className="input input-bordered w-full" />
                    <textarea name="description" placeholder="Description" required className="textarea textarea-bordered w-full" />
                    <input name="contact" placeholder="Contact Info (Phone or Email)" required className="input input-bordered w-full" />

                    <select name="availability" required className="select select-bordered w-full">
                        <option value="">Availability</option>
                        <option value="Available">Available</option>
                        <option value="Not Available">Not Available</option>
                    </select>

                    <input name="image" placeholder="Image URL" required className="input input-bordered w-full" />

                    {/* Read-only fields for logged-in user */}
                    <input name="userName" value={user?.displayName || ""} readOnly className="input input-bordered w-full bg-gray-100" />
                    <input name="userEmail" value={user?.email || ""} readOnly className="input input-bordered w-full bg-gray-100" />

                    {/* Submit button with Slide animation */}
                    <Slide direction="up" triggerOnce>
                        <button type="submit" className="btn btn-primary w-full text-lg font-semibold">
                            Add Listing
                        </button>
                    </Slide>
                </form>
            </Fade>
        </div>
    );
};

export default AddListing;

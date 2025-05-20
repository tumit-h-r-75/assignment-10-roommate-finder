import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Details = () => {
    const roommate = useLoaderData();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(roommate.likes || 0);
    const [showContact, setShowContact] = useState(false);

    const handleLike = () => {
        if (!liked) {
            setLiked(true);
            setLikeCount(prev => prev + 1);
            setShowContact(true);
            toast.success('You liked this profile!');
            // Optional: Send updated like count to server using fetch/axios (PUT/PATCH)
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                    src={roommate.image}
                    alt={roommate.name}
                    className="w-full h-80 object-cover rounded-xl"
                />
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">{roommate.userName}</h2>
                    <p><span className="font-medium">Location:</span> {roommate.location}</p>
                    <p><span className="font-medium">Budget:</span> ${roommate.rent}</p>
                    <p><span className="font-medium">Lifestyle:</span> {roommate.lifestyle}</p>
                    <p><span className="font-medium">Interests:</span> {roommate.interests}</p>
                    <p><span className="font-medium">Availability:</span> {roommate.availability}</p>
                    <p><span className="font-medium">Posted by:</span> {roommate.userName}</p>

                    <div className="mt-4">
                        <button
                            onClick={handleLike}
                            className={`btn ${liked ? 'btn-success' : 'btn-outline'} mr-4`}
                        >
                            ❤️ {liked ? 'Liked' : 'Like'}
                        </button>
                        <span className="font-medium">Total Likes:</span> {likeCount}
                    </div>

                    {showContact && (
                        <div className="mt-4">
                            <p className="text-lg font-semibold text-green-600">📞 Contact: {roommate.contact}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;

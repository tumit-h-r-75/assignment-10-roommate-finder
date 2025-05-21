import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Details = () => {
    const roommate = useLoaderData();
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(roommate.likes || 0);
    const [showContact, setShowContact] = useState(false);

    const storageKey = `liked_${roommate._id}`;

    useEffect(() => {
        const alreadyLiked = localStorage.getItem(storageKey);
        if (alreadyLiked) {
            setLiked(true);
            setShowContact(true);
        }
    }, [storageKey]);

    const handleLike = () => {
        if (!liked) {
            const updatedLikes = likeCount + 1;

            fetch(`https://roommate-finder-server.vercel.app/roommate/${roommate._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isLike: updatedLikes }),
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        localStorage.setItem(storageKey, 'true');
                        setLiked(true);
                        setLikeCount(updatedLikes);
                        setShowContact(true);

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "You liked successfully!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-xl shadow mt-10">
            <h2 className="text-xl font-bold text-center mb-6">{likeCount} people interested in</h2>
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
                    <p><span className="font-medium">Description:</span> {roommate.description}</p>
                    <p><span className="font-medium">Availability:</span> {roommate.availability}</p>
                    <p><span className="font-medium">Posted by:</span> {roommate.userName}</p>

                    <div className="mt-4">
                        <button
                            onClick={handleLike}
                            disabled={liked}
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

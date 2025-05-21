import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

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

    const availabilityBadge = roommate.availability === "Available"
        ? <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">Available</span>
        : <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">Not Available</span>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            {/* Typewriter Animated Title */}
            <h2 className="text-3xl text-center font-bold text-primary mb-8">
                <Typewriter
                    words={[`${likeCount} People Interested to Room with`, `${roommate.userName}`]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </h2>

            <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left: Image */}
                    <Fade direction="left">
                        <img
                            src={roommate.image}
                            alt={roommate.name}
                            className="w-full h-full object-cover max-h-[450px]"
                        />
                    </Fade>

                    {/* Right: Info */}
                    <Fade direction="right">
                        <div className="p-6 space-y-3 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-1">{roommate.userName}</h2>
                                <p className="text-gray-700"><span className="font-semibold">Location:</span> {roommate.location}</p>
                                <p className="text-gray-700"><span className="font-semibold">Budget:</span> ${roommate.rent}</p>
                                <p className="text-gray-700"><span className="font-semibold">Lifestyle:</span> {roommate.lifestyle}</p>
                                <p className="text-gray-700"><span className="font-semibold">Description:</span> {roommate.description}</p>
                                <p className="text-gray-700 flex items-center gap-2">
                                    <span className="font-semibold">Availability:</span> {availabilityBadge}
                                </p>
                                <p className="text-gray-700"><span className="font-semibold">Posted By:</span> {roommate.userName}</p>
                            </div>

                            <div className="mt-4 flex items-center gap-4 flex-wrap">
                                <button
                                    onClick={handleLike}
                                    disabled={liked}
                                    className={`btn ${liked ? 'btn-success' : 'btn-outline'} px-6`}
                                    data-tooltip-id="like-tooltip"
                                    data-tooltip-content={liked ? "You've already liked!" : "Click to like & reveal contact"}
                                >
                                    ❤️ {liked ? 'Liked' : 'Like'}
                                </button>

                                <Tooltip id="like-tooltip" place="top" />
                                <p className="font-medium text-gray-700">Total Likes: {likeCount}</p>
                            </div>

                            {showContact && (
                                <div className="mt-3">
                                    <p className="text-lg font-semibold text-green-600 bg-green-50 px-4 py-2 rounded-xl inline-block">
                                        📞 Contact: {roommate.contact}
                                    </p>
                                </div>
                            )}
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Details;

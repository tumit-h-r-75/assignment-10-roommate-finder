import React, { useEffect, useState, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../context/AuthContext';
import 'react-tooltip/dist/react-tooltip.css';

const Details = () => {
  const roommate = useLoaderData();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(roommate.likes || 0);
  const [showContact, setShowContact] = useState(false);
  const { darkMode } = useContext(AuthContext);
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
        headers: { 'Content-Type': 'application/json' },
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
              icon: 'success',
              title: 'You liked successfully!',
              showConfirmButton: false,
              timer: 1500,
              background: darkMode ? "#1f2937" : "#fff",
              color: darkMode ? "#fff" : "#000",
            });
          }
        });
    }
  };

  const availabilityBadge = roommate.availability === "Available"
    ? <span className="bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full">Available</span>
    : <span className="bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-300 text-sm font-semibold px-3 py-1 rounded-full">Not Available</span>;

  return (
    <div className={`max-w-6xl mx-auto px-4 py-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      {/* Title with Typewriter */}
      <h2 className="text-3xl text-center font-bold text-primary mb-10">
        <Typewriter
          words={[`${likeCount} People Interested to Room with ${roommate.userName}`]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>

      {/* Card Layout */}
      <div className={`rounded-3xl overflow-hidden shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} grid grid-cols-1 md:grid-cols-2`}>
        {/* Image */}
        <Fade direction="left">
          <img
            src={roommate.image}
            alt={roommate.name}
            className="w-full h-full object-cover max-h-[450px]"
          />
        </Fade>

        {/* Info Section */}
        <Fade direction="right">
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-primary">{roommate.userName}</h3>
            <ul className="space-y-2 text-sm leading-relaxed">
              <li><strong>📍 Location:</strong> {roommate.location}</li>
              <li><strong>💰 Budget:</strong> ${roommate.rent}</li>
              <li><strong>🧬 Lifestyle:</strong> {roommate.lifestyle}</li>
              <li><strong>📝 Description:</strong> {roommate.description}</li>
              <li className="flex items-center gap-2">
                <strong>🚦 Availability:</strong> {availabilityBadge}
              </li>
              <li><strong>🙋‍♂️ Posted By:</strong> {roommate.userName}</li>
            </ul>

            {/* Like & Contact */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
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
              <p className="text-sm font-medium">{likeCount} Total Likes</p>
            </div>

            {showContact && (
              <div className="mt-4">
                <p className="bg-green-100 dark:bg-green-800/20 text-green-700 dark:text-green-300 text-md font-semibold px-4 py-2 rounded-xl inline-block">
                  📞 Contact: {roommate.contact}
                </p>
              </div>
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Details;

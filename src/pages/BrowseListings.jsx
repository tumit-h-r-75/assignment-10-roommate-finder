import React, {  useState } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { HiViewList, HiViewGrid } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";

const BrowseListings = () => {
  const allRoommate = useLoaderData();
  const [viewMode, setViewMode] = useState('table'); // 'table' or 'card'

  if (!allRoommate || allRoommate.length === 0) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center">
        Browse Roommate Listings
      </h2>

      <div className='flex justify-end items-center mb-6'>
        <button
          onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
          className="p-2 bg-primary text-white rounded-md hover:bg-primary/90 transition text-xl"
          title={viewMode === 'table' ? 'Switch to Card View' : 'Switch to Table View'}
        >
          {viewMode === 'table' ? <HiViewGrid /> : <HiViewList />}
        </button>
      </div>

      {viewMode === 'table' ? (
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
                <tr
                  key={post._id}
                  className="hover:bg-gray-50 transition"
                >
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
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${post.availability === 'Available'
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
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Fade cascade damping={0.1} triggerOnce>
            {allRoommate.map((post) => (
              <div
                key={post._id}
                className="bg-white h-full rounded-lg shadow-md hover:shadow-lg transition p-5"
              >
                <div className="relative mb-4 h-44 overflow-hidden rounded-lg">
                  <img
                    src={post.image}
                    alt={post.userName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>📍 Location:</strong> {post.location}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>🏠 Room Type:</strong> {post.roomType}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>💰 Rent:</strong> ${post.rent}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>🟢 Availability:</strong>{' '}
                  <span
                    className={`font-semibold ${post.availability === 'Available'
                      ? 'text-green-600'
                      : 'text-red-600'
                      }`}
                  >
                    {post.availability}
                  </span>
                </p>
                <Link to={`/details/${post._id}`}>
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition">
                    See More
                  </button>
                </Link>
              </div>
            ))}
          </Fade>
        </div>
      )}
    </div>
  );
};

export default BrowseListings;

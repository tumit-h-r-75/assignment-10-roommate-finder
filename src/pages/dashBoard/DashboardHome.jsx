import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaListUl,
  FaUser,
  FaHeart,
  FaBookmark,
  FaComments,
  FaSearch,
  FaHome,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const cards = [
    {
      title: "My Listings",
      desc: "View and manage your posts",
      icon: <FaListUl className="text-3xl text-primary" />,
      bg: "from-blue-100 to-blue-50",
    },
    {
      title: "Add Listing",
      desc: "Post a new roommate request",
      icon: <FaPlus className="text-3xl text-green-600" />,
      bg: "from-green-100 to-green-50",
    },
    {
      title: "My Profile",
      desc: "Edit and manage your info",
      icon: <FaUser className="text-3xl text-yellow-600" />,
      bg: "from-yellow-100 to-yellow-50",
    },
    {
      title: "Total Likes",
      desc: "People liked your posts",
      icon: <FaHeart className="text-3xl text-red-600" />,
      bg: "from-red-100 to-red-50",
    },
    {
      title: "Bookmarked Rooms",
      desc: "Rooms you’ve bookmarked",
      icon: <FaBookmark className="text-3xl text-pink-600" />,
      bg: "from-pink-100 to-pink-50",
    },
    {
      title: "Messages",
      desc: "Chat with roommates",
      icon: <FaComments className="text-3xl text-indigo-600" />,
      bg: "from-indigo-100 to-indigo-50",
    },
    {
      title: "Explore More",
      desc: "Browse all listings",
      icon: <FaSearch className="text-3xl text-teal-600" />,
      bg: "from-teal-100 to-teal-50",
    },
    {
      title: "Go Home",
      desc: "Back to main page",
      icon: <FaHome className="text-3xl text-gray-600" />,
      bg: "from-gray-100 to-gray-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold text-primary mb-2">
        Welcome back, {user?.displayName?.split(" ")[0]}! 👋
      </h2>
      <p className="text-gray-600 mb-6">
        Manage everything in one place — listings, profile, messages and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {cards.map((card, i) => (
          <Link
            to={card.link}
            key={i}
            className={`p-5 bg-gradient-to-r ${card.bg} rounded-xl shadow hover:shadow-lg transition`}
          >
            <div className="flex items-center gap-4">
              {card.icon}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default DashboardHome;

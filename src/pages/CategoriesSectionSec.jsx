// ✅ CategoriesSection.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserGraduate, FaBriefcase, FaHome, FaStar, FaCrown } from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  {
    icon: <FaUserGraduate className="text-3xl text-primary" />,
    title: "Students",
    desc: "Budget-friendly shared rooms for students."
  },
  {
    icon: <FaBriefcase className="text-3xl text-primary" />,
    title: "Professionals",
    desc: "Comfortable space for working individuals."
  },
  {
    icon: <FaHome className="text-3xl text-primary" />,
    title: "Family",
    desc: "Spacious living for small families."
  }
];

const topRated = [
  {
    icon: <FaStar className="text-yellow-400 text-3xl" />,
    title: "Raihan Kabir",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    location: "Uttara, Dhaka"
  },
  {
    icon: <FaStar className="text-yellow-400 text-3xl" />,
    title: "Jannat Moon",
    rating: "⭐️⭐️⭐️⭐️",
    location: "Dhanmondi, Dhaka"
  },
  {
    icon: <FaCrown className="text-yellow-500 text-3xl" />,
    title: "Shuvo Hasan",
    rating: "⭐️⭐️⭐️⭐️⭐️",
    location: "Mirpur, Dhaka"
  }
];

const CategoriesSectionSec = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <>

      {/* Top Rated Roommates Section */}
      <section className="max-w-7xl mx-auto px-4 my-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-10 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌟 Top Rated Roommates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRated.map((person, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl shadow-md border transition-all duration-300 hover:-translate-y-1 ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{person.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{person.title}</h3>
              <p className="text-sm mb-1">{person.location}</p>
              <p className="text-yellow-400 text-lg">{person.rating}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoriesSectionSec;

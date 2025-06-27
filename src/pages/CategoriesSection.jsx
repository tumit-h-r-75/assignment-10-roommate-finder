// ✅ CategoriesSection.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserGraduate, FaBriefcase, FaHome } from "react-icons/fa";
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

const CategoriesSection = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section className="max-w-7xl mx-auto px-4 my-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-primary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🧩 Browse by Categories
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl shadow-md border transition-all duration-300 hover:-translate-y-1 ${darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className={`text-sm ${darkMode?"text-white":"text-gray-900"}`}>{cat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;

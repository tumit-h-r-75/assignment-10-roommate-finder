// ✅ BlogSection.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaRegNewspaper } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "How to Find the Perfect Roommate",
    excerpt: "Tips and tricks to choose the best roommate for your lifestyle...",
    date: "2025-06-20",
    image: "https://i.ibb.co/Kz6dR577/high-angle-view-young-woman-using-mobile-phone-1048944-1924251.jpg",
  },
  {
    id: 2,
    title: "Budgeting Your Shared Apartment",
    excerpt: "Learn how to split costs and manage finances with your roommate...",
    date: "2025-06-15",
    image: "https://i.ibb.co/XxhT5qWH/young-couple-checking-their-family-budget-273609-12985.jpg",
  },
  {
    id: 3,
    title: "Creating a Harmonious Living Space",
    excerpt: "Design ideas and communication tips for peaceful co-living...",
    date: "2025-06-10",
    image: "https://i.ibb.co/PvKWmXLs/close-up-people-working-from-home-23-2149173373.jpg",
  },
];

const BlogSection = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section className="max-w-7xl mx-auto px-4 my-20">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-primary flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaRegNewspaper className="text-4xl text-secondary" />
        Latest Blog Posts
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map(({ id, title, excerpt, date, image }) => (
          <motion.article
            key={id}
            className={`rounded-xl overflow-hidden shadow-md border transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${
              darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-white text-gray-900 border-gray-200"
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: id * 0.15 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className={`text-sm mb-3 ${darkMode?"text-white":"text-gray-900"}`}>{excerpt}</p>
              <time className={`text-xs ${darkMode?"text-white":"text-gray-900"}`}>{new Date(date).toLocaleDateString()}</time>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

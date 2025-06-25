// ✅ PromoSection.jsx
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import promoImg from "../assets/promoImg.avif"; 
  const PromoSection = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <section className="max-w-7xl mx-auto px-4 my-20">
      <motion.div
        className={`rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row items-center gap-8 p-6 md:p-10 transition duration-500 ${darkMode ? "bg-gray-800 text-white" : "bg-blue-100 text-gray-900"}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Left Text */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-primary">
            🎉 Special Summer Discount!
          </h2>
          <p className="text-lg">
            Book your roommate through us this month and get up to <span className="font-bold text-secondary">20% off</span> on your service fee.
          </p>
          <button className="btn bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-focus transition-all duration-300">
            Claim Offer
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={promoImg}
            alt="Promotion Banner"
            className="w-full h-auto rounded-xl object-cover shadow-md"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default PromoSection;

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { motion } from "framer-motion";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto p-6 bg-base-100 shadow-xl rounded-2xl"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-32 h-32 rounded-full ring-4 ring-primary object-cover shadow-md"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{user.displayName}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl shadow">
          <p className="text-sm text-gray-500">User ID</p>
          <p className="font-semibold text-gray-800 break-words">{user.uid}</p>
        </div>
        <div className="p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl shadow">
          <p className="text-sm text-gray-500">Provider</p>
          <p className="font-semibold text-gray-800">
            {user.providerId || "N/A"}
          </p>
        </div>
        <div className="p-4 bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl shadow">
          <p className="text-sm text-gray-500">Verified</p>
          <p className="font-semibold text-gray-800">
            {user.emailVerified ? "Yes ✅" : "No ❌"}
          </p>
        </div>
        <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow">
          <p className="text-sm text-gray-500">Display Name</p>
          <p className="font-semibold text-gray-800">{user.displayName}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MyProfile;

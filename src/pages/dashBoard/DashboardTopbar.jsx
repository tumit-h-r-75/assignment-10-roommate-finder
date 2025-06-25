import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const DashboardTopbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      {/* Go Home Button */}
      <Link
        to="/"
        className="btn btn-sm bg-primary text-white hover:bg-primary/90 rounded-full flex items-center gap-2"
      >
        <FaHome /> Home
      </Link>

      {/* User Avatar with Tooltip */}
      {user && (
        <div className="relative group cursor-pointer">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-12 h-12 rounded-full ring-2 ring-primary object-cover"
          />
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition bg-primary text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none z-10">
            {user.displayName}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTopbar;

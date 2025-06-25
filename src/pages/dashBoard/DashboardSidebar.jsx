import { NavLink } from "react-router-dom";
import { FaUser, FaPlus, FaList } from "react-icons/fa";

const DashboardSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-screen sticky top-0 hidden md:block">
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-bold text-primary">Dashboard</h2>
        <nav className="space-y-2">
          <NavLink
            to="/dashboard/my-listings"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary/10 ${
                isActive ? "text-primary font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaList /> My Listings
          </NavLink>

          <NavLink
            to="/dashboard/add-listing"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary/10 ${
                isActive ? "text-primary font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaPlus /> Add Listing
          </NavLink>

          <NavLink
            to="/dashboard/my-profile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded hover:bg-primary/10 ${
                isActive ? "text-primary font-semibold" : "text-gray-700"
              }`
            }
          >
            <FaUser /> My Profile
          </NavLink>
        </nav>
      </div>
    </aside>
  );
};

export default DashboardSidebar;

import { Outlet } from "react-router-dom";
import DashboardSidebar from "../pages/dashBoard/DashboardSidebar";
import DashboardTopbar from "../pages/dashBoard/DashboardTopbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <div className="flex-1 bg-base-100 p-4">
        {/* Topbar with user avatar */}
        <DashboardTopbar />

        {/* Nested route pages */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

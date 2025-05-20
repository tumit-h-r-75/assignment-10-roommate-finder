import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddListing from "../pages/AddListing";
import BrowseListings from "../pages/BrowseListings";
import MyListings from "../pages/MyListings";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/add-listing", Component: AddListing },
      { path: "/browse", Component: BrowseListings },
      { path: "/my-listings", Component: MyListings },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
]);

export default router;

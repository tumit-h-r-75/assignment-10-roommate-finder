import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AddListing from "../pages/AddListing";
import BrowseListings from "../pages/BrowseListings";
import MyListings from "../pages/MyListings";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/AuthLayout";
import PrivateRoute from "../context/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: "/", Component: Home },
            {
                path: "/add-listing",
                element:<PrivateRoute>
                    <AddListing></AddListing>
                </PrivateRoute>
            },
            { path: "/browse", Component: BrowseListings },
            { path: "/my-listings", Component: MyListings },
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { path: "/auth/login", Component: Login },
            { path: "/auth/register", Component: Register },
        ]
    }
]);

export default router;

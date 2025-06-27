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
import Details from "../pages/Details";
import Error from "../pages/Error";
import Loader from "../components/Loader";
import UpdateListing from "../pages/UpdateListing";
import AboutUs from "../pages/AboutUs";
import SupportSection from "../pages/SupportSection";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/dashBoard/MyProfile";
import DashboardHome from "../pages/dashBoard/DashboardHome";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                Component: Home,
                loader: () => fetch('https://roommate-finder-server.vercel.app/roommate')
            },
            {
                path: '/details/:id',
                element: (<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>),
                loader: ({ params }) => fetch(`https://roommate-finder-server.vercel.app/roommate/${params.id}`)
            },
            {
                path: "/browse",
                Component: BrowseListings,
                loader: () => fetch('https://roommate-finder-server.vercel.app/roommate')
            },
            {
                path: "/updateList/:id",
                element: (<PrivateRoute>
                    <UpdateListing></UpdateListing>
                </PrivateRoute>),
                loader: ({ params }) => fetch(`https://roommate-finder-server.vercel.app/roommate/${params.id}`),

            },
            { path: '/about', Component: AboutUs },
            { path: '/support', Component: SupportSection }
        ],
    },
    {
        path: "/auth",
        Component: AuthLayout,
        children: [
            { path: "/auth/login", Component: Login },
            { path: "/auth/register", Component: Register },
        ]
    },
    {
        path: "/*",
        Component: Error,
    },
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /></PrivateRoute>,
        children: [
            { index: true, Component: DashboardHome },
            {
                path: "my-profile",
                element: <MyProfile />,
            },
            {
                path: "add-listing",
                element: (
                    <PrivateRoute>
                        <AddListing />
                    </PrivateRoute>
                ),
            },
            {
                path: "my-listings",
                element: (
                    <PrivateRoute>
                        <MyListings />
                    </PrivateRoute>
                ),
            },
        ],
    }

]);

export default router;

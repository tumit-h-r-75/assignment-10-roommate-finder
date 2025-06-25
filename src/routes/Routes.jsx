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
                path: "/add-listing",
                element: (<PrivateRoute>
                    <AddListing></AddListing>
                </PrivateRoute>)
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
                path: "/my-listings",
                element: (<PrivateRoute>
                    <MyListings></MyListings>
                </PrivateRoute>),
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
    }
]);

export default router;

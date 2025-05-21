import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/navLogo.png";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handleLogout = () => {
        signOutUser()
            .then(() => toast.success("Logged out successfully"))
            .catch((error) => toast.error(error.message));
    };

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "hover:text-primary transition duration-300"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-listing"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "hover:text-primary transition duration-300"
                    }
                >
                    Add to Find Roommate
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/browse"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "hover:text-primary transition duration-300"
                    }
                >
                    Browse Listing
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-listings"
                    className={({ isActive }) =>
                        isActive
                            ? "text-primary font-semibold border-b-2 border-primary"
                            : "hover:text-primary transition duration-300"
                    }
                >
                    My Listings
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Left: Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={navLogo} alt="Logo" className="w-12 h-12 object-contain" />
                    <h1 className="text-2xl font-bold text-primary select-none">
                        Roommate<span className="text-secondary">Finder</span>
                    </h1>
                </Link>

                {/* Center: NavLinks Desktop */}
                <ul className="hidden lg:flex space-x-8 text-base font-medium text-gray-700">
                    {navLinks}
                </ul>

                {/* Right: Auth Buttons Desktop */}
                <div className="hidden lg:flex items-center space-x-4">
                    {user ? (
                        <>
                            <div className="relative group cursor-pointer">
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="w-10 h-10 rounded-full ring-2 ring-primary object-cover"
                                />
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 bg-primary text-white text-xs rounded px-2 py-1 whitespace-nowrap pointer-events-none transition-opacity duration-300">
                                    {user.displayName}
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline btn-sm rounded-full px-5 hover:bg-primary hover:text-white transition"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/auth/login"
                                className="btn btn-outline btn-sm rounded-full px-6 hover:bg-primary hover:text-white transition"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/register"
                                className="btn btn-primary btn-sm rounded-full px-6"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="lg:hidden dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-700"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-4 shadow-lg bg-base-100 rounded-box w-56 mt-2 space-y-2"
                    >
                        {navLinks}
                        <li>
                            <hr className="my-2 border-gray-300" />
                        </li>
                        {user ? (
                            <>
                                <li className="flex items-center space-x-2">
                                    <img
                                        src={user.photoURL}
                                        alt={user.displayName}
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    <span className="font-semibold">{user.displayName}</span>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline w-full hover:bg-primary hover:text-white transition"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        to="/auth/login"
                                        className="btn btn-outline w-full hover:bg-primary hover:text-white transition"
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/auth/register"
                                        className="btn btn-primary w-full"
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

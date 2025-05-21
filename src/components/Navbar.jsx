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
                <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/add-listing" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    Add to Find Roommate
                </NavLink>
            </li>
            <li>
                <NavLink to="/browse" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    Browse Listing
                </NavLink>
            </li>
            <li>
                <NavLink to="/my-listings" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    My Listings
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar flex justify-baseline items-center bg-base-300 shadow-sm px-2 md:px-6">
            {/* Left Logo */}
            <div className="flex items-center gap-2">
                <Link to="/" className="flex items-center -space-x-7">
                    <img src={navLogo} alt="logo" className="w-30 h-24 object-contain" />
                    <h1 className="text-xl md:text-2xl font-bold text-primary">
                        Roommate<span className="text-secondary">Finder</span>
                    </h1>
                </Link>
            </div>

            {/* Center NavLinks for Desktop */}
            <div className="hidden lg:flex flex-1 justify-center">
                <ul className="menu menu-horizontal gap-4 text-base">{navLinks}</ul>
            </div>

            {/* Right Auth Buttons for Desktop */}
            <div className="hidden lg:flex items-center gap-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                            <img src={user.photoURL} alt="User" className="w-10 h-10 rounded-full ring-2 ring-primary" />
                        </div>
                        <button onClick={handleLogout} className="btn btn-outline hover:btn-primary rounded-full px-4">
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                        <Link to="/auth/login" className="btn btn-outline hover:btn-primary rounded-full px-4">Login</Link>
                        <Link to="/auth/register" className="btn btn-outline hover:btn-primary rounded-full px-4">Register</Link>
                    </>
                )}
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="lg:hidden dropdown dropdown-end ml-auto">
                <button tabIndex={0} className="btn btn-ghost">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-base-100 rounded-box w-60">
                    {navLinks}
                    <div className="mt-2 border-t pt-2">
                        {user ? (
                            <>
                                <div className="flex items-center gap-2 px-2">
                                    <img src={user.photoURL} alt="User" className="w-8 h-8 rounded-full" />
                                    <span className="font-semibold">{user.displayName}</span>
                                </div>
                                <button onClick={handleLogout} className="btn btn-outline hover:btn-primary w-full mt-2">
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/auth/login" className="btn btn-outline hover:btn-primary w-full mb-1">Login</Link>
                                <Link to="/auth/register" className="btn btn-outline hover:btn-primary w-full">Register</Link>
                            </>
                        )}
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

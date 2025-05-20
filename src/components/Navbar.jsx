import { Link, NavLink } from "react-router";
import navLogo from "../assets/WhatsApp Image 2025-05-20 at 12.48.23_7bc19765.jpg"

const Navbar = () => {
    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/add-listing" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    Add Listing
                </NavLink>
            </li>
            <li>
                <NavLink to="/browse" className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"} >
                    Browse
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-listings"
                    className={({ isActive }) => isActive ? "text-primary font-semibold" : "hover:text-primary transition"}>
                    My Listings
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-sm px-6 py-3 sticky top-0 z-10">
            <div className="flex items-center justify-between ">
                <div>
                    <Link to="/" className="text-2xl font-bold text-primary transition duration-300 flex items-center justify-center -space-x-5">
                    <img src={navLogo} className="w-30 h-auto" alt="" />
                        <h1>Roommate<span className="text-secondary">Finder</span></h1>
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4 text-base">{navLinks}</ul>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <Link to="/auth/login" className="btn btn-outline hover:btn-primary rounded-full px-4">Login</Link>
                    <Link to="/auth/register" className="btn btn-outline hover:btn-primary rounded-full px-4">Register</Link>
                </div>



                {/* Mobile Menu */}
                <div className="lg:hidden dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        <div className="mt-2">
                            <Link to="/auth/login" className="btn btn-outline hover:btn-primary w-full mb-1">Login</Link>
                            <Link to="/auth/register" className="btn btn-outline hover:btn-primary  w-full">Register</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/navLogo.png";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { user, signOutUser, setDarkMode, darkMode } = useContext(AuthContext);
    // const location = useLocation();

    // if (location.pathname !== "/") {
    //     setDarkMode(false);
    // }

    const handleLogout = () => {
        signOutUser()
            .then(() => toast.success("Logged out successfully"))
            .catch((error) => toast.error(error.message));
    };

    const navLinkClass = ({ isActive }) =>
        isActive
            ? `bg-primary text-white text-sm px-4 py-1.5 rounded-full font-medium hover:bg-primary/90 transition`
            : `text-sm transition duration-300 hover:text-primary ${darkMode ? "text-white" : "text-black"
            }`;

    const navLinks = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/browse" className={navLinkClass}>Browse Listing</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About Us</NavLink></li>
            <li><NavLink to="/support" className={navLinkClass}>Support</NavLink></li>
        </>
    );

    return (
        <nav className="bg-base-100 shadow-md sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-2">
                    <img src={navLogo} alt="Logo" className="w-14 h-auto object-contain" />
                    <h1 className="text-2xl font-bold text-primary select-none">
                        Roommate<span className="text-secondary">Finder</span>
                    </h1>
                </Link>

                {/* Desktop NavLinks */}
                <ul className="hidden lg:flex space-x-6 text-base font-medium">
                    {navLinks}
                </ul>

                {/* Dark Mode + Auth Buttons */}
                <div className="hidden lg:flex items-center space-x-4">
                        <label className="toggle text-base-content">
                            <input onChange={() => setDarkMode(!darkMode)} type="checkbox" value="dark" className="theme-controller" />
                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <path d="M12 2v2"></path><path d="M12 20v2"></path>
                                    <path d="m4.93 4.93 1.41 1.41"></path>
                                    <path d="m17.66 17.66 1.41 1.41"></path>
                                    <path d="M2 12h2"></path><path d="M20 12h2"></path>
                                    <path d="m6.34 17.66-1.41 1.41"></path>
                                    <path d="m19.07 4.93-1.41 1.41"></path>
                                </g>
                            </svg>
                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
                                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                </g>
                            </svg>
                        </label>
                    

                    {user ? (
                        <>
                            <div className="relative group cursor-pointer">
                                <img
                                    src={user.photoURL}
                                    alt={user.displayName}
                                    className="w-10 h-10 rounded-full ring ring-primary object-cover"
                                />
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-primary text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                                    {user.displayName}
                                </div>
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline btn-sm rounded-full px-5 hover:bg-primary hover:text-white"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/auth/login" className="btn btn-outline btn-sm rounded-full px-6">Login</Link>
                            <Link to="/auth/register" className="btn btn-primary btn-sm rounded-full px-6">Register</Link>
                        </>
                    )}
                </div>

                {/* Mobile Dropdown */}
                <div className="lg:hidden dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-4 shadow-lg bg-base-100 rounded-box w-60 mt-2 space-y-2">
                        {navLinks}
                        {location.pathname === "/" && (
                            <li>
                                <label className="toggle text-base-content">
                                    <input
                                        onChange={() => setDarkMode(!darkMode)}
                                        type="checkbox"
                                        value="dark"
                                        className="theme-controller"
                                    />
                                    {/* Icons */}
                                    {darkMode ? (
                                        // Moon Icon
                                        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                        </svg>
                                    ) : (
                                        // Sun Icon
                                        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 4V2m0 20v-2m8-8h2M2 12H4m15.54 7.54l-1.42-1.42M6.88 6.88L5.46 5.46m12.02 0l-1.42 1.42M6.88 17.12l-1.42 1.42M12 18a6 6 0 100-12 6 6 0 000 12z" />
                                        </svg>
                                    )}
                                </label>
                            </li>
                        )}
                        <li><hr className="my-2 border-gray-300" /></li>
                        {user ? (
                            <>
                                <li className="flex items-center space-x-2">
                                    <img src={user.photoURL} alt={user.displayName} className="w-14 h-14 rounded-full object-cover" />
                                    <span className="font-semibold">{user.displayName}</span>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="btn btn-outline w-full hover:bg-primary hover:text-white"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/auth/login" className="btn btn-outline w-full hover:bg-primary hover:text-white">Login</Link></li>
                                <li><Link to="/auth/register" className="btn btn-primary w-full">Register</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;

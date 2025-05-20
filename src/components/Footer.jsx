import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-base-200 text-base-content px-6 pt-12 pb-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                {/* Brand Info */}
                <div className="flex flex-col items-center gap-5">
                    <Link to="/" className="text-3xl font-extrabold text-primary">
                        RoommateFinder
                    </Link>
                    <p className="text-sm text-center mt-3">
                        Find your ideal roommate easily. Search, connect, and live better together.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col items-center gap-5">
                    <h3 className="footer-title uppercase font-semibold mb-2">Pages</h3>
                    <ul className="space-y-1">
                        <li><Link className="link link-hover" to="/">Home</Link></li>
                        <li><Link className="link link-hover" to="/add-listing">Add Listing</Link></li>
                        <li><Link className="link link-hover" to="/browse">Browse</Link></li>
                        <li><Link className="link link-hover" to="/my-listings">My Listings</Link></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="flex flex-col items-center gap-5">
                    <h3 className="footer-title uppercase font-semibold mb-2">Support</h3>
                    <ul className="space-y-1">
                        <li><a className="link link-hover">Privacy Policy</a></li>
                        <li><a className="link link-hover">Terms of Service</a></li>
                        <li><a className="link link-hover">Help Center</a></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center gap-5">
                    <h3 className="footer-title uppercase font-semibold mb-2">Follow Us</h3>
                    <div className="flex justify-center md:justify-start gap-4 mt-2">
                        <a href="https://www.facebook.com/profile.php?id=100089950557236" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/_t_u_m_i_t_h_a_s_a_n_r_a_f_i_/" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" className="w-6 h-6" />
                        </a>
                        <a href="http://www.youtube.com/@tumithasan6733" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center mt-10 border-t border-base-300 pt-4 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} RoommateFinder. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

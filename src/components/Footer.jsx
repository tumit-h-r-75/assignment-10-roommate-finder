import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content px-5 pt-10 pb-4">
      <div className="footer max-w-7xl mx-auto flex justify-between text-center ">
        {/* Site Info */}
        <div>
          <Link to="/" className="text-2xl font-bold text-primary">
            RoommateFinder
          </Link>
          <p className="max-w-xs text-sm mt-2">
            Find your ideal roommate easily. Search, connect, and live better together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <span className="footer-title">Pages</span>
          <Link className="link link-hover" to="/">Home</Link>
          <Link className="link link-hover" to="/add-listing">Add Listing</Link>
          <Link className="link link-hover" to="/browse">Browse</Link>
          <Link className="link link-hover" to="/my-listings">My Listings</Link>
        </div>

        {/* Support */}
        <div>
          <span className="footer-title">Support</span>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Help Center</a>
        </div>

        {/* Social */}
        <div>
          <span className="footer-title">Follow Us</span>
          <div className="flex gap-3 mt-1">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-5 h-5" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter" className="w-5 h-5" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="Instagram" className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="text-center mt-10 border-t border-base-300 pt-4 text-sm">
        &copy; {new Date().getFullYear()} RoommateFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

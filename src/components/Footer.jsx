import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Footer = () => {
  const { darkMode } = useContext(AuthContext);

  return (
    <footer
      className={`px-6 pt-12 pb-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-base-200 text-base-content"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Info */}
        <div className="flex flex-col items-center gap-5 md:items-start">
          <Link
            to="/"
            className="text-3xl font-extrabold text-primary"
          >
            Roommate<span className="text-secondary">Finder</span>
          </Link>
          <p
            className={`text-sm mt-3 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            } max-w-xs`}
          >
            Find your ideal roommate easily. Search, connect, and live better together.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h3 className="footer-title uppercase font-semibold mb-2">
            Pages
          </h3>
          <ul className="space-y-1">
            {[
              { to: "/", label: "Home" },
              { to: "/browse", label: "Browse" },
              { to: "/about", label: "About Us" },
              { to: "/support", label: "Support" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`link link-hover ${
                    darkMode
                      ? "text-gray-400 hover:text-primary"
                      : "text-gray-600 hover:text-primary"
                  } transition`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Placeholder */}
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h3 className="footer-title uppercase font-semibold mb-2">
            Support
          </h3>
          <ul className="space-y-1">
            {["Privacy Policy", "Terms of Service", "Help Center"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className={`link link-hover ${
                    darkMode
                      ? "text-gray-400 hover:text-primary"
                      : "text-gray-600 hover:text-primary"
                  } transition`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-5 md:items-start">
          <h3 className="footer-title uppercase font-semibold mb-2">
            Follow Us
          </h3>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100089950557236"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className={`w-6 h-6 filter ${darkMode ? "grayscale hover:grayscale-0" : ""}`}
              />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_t_u_m_i_t_h_a_s_a_n_r_a_f_i_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
                className={`w-6 h-6 filter ${darkMode ? "grayscale hover:grayscale-0" : ""}`}
              />
            </a>

            {/* YouTube */}
            <a
              href="http://www.youtube.com/@tumithasan6733"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className={`w-6 h-6 filter ${darkMode ? "grayscale hover:grayscale-0" : ""}`}
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/tumit-hasan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                alt="LinkedIn"
                className={`w-6 h-6 filter ${darkMode ? "grayscale hover:grayscale-0" : ""}`}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className={`text-center mt-10 border-t pt-4 text-sm select-none ${
          darkMode ? "border-gray-700 text-gray-400" : "border-base-300 text-gray-500"
        }`}
      >
        &copy; {new Date().getFullYear()} RoommateFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// DONE
const Navbar = () => {
  // Helper for NavLink active class styling
  const getNavLinkClass = ({ isActive }) =>
    `no-underline transition-colors duration-200 hover:text-white px-2 py-1 whitespace-nowrap ${
      isActive ? 'text-white font-semibold' : 'text-slate-300'
    }`;

  const profilePicUrl = '/default-profile-placeholder.png'; // Static placeholder

  return (
    <nav className="sticky top-0 z-50 bg-slate-800 p-4 shadow-lg">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold text-white no-underline mr-8">
          Founder's Hub
        </Link>

        <div className="flex items-center gap-x-3 md:gap-x-5 flex-wrap">
          {/* Public Links */}
          <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
          <NavLink to="/guidelines" className={getNavLinkClass}>Guidelines</NavLink>
          <NavLink to="/disclaimer" className={getNavLinkClass}>Disclaimer</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>

          <div className="flex-grow"></div>

          {/* Static Logged-In State */}
          <div className="flex items-center gap-3">
              <NavLink
                to="/report-lost"
                className={getNavLinkClass + " text-red-400 hover:text-red-300"}
                title="Report an item you lost"
              >
                Report Lost
              </NavLink>
              <NavLink
                to="/report-found"
                className={getNavLinkClass + " text-emerald-400 hover:text-emerald-300"}
                title="Report an item you found"
              >
                Report Found
              </NavLink>

              <NavLink to="/my-reports" className={getNavLinkClass}>My Reports</NavLink>

              <NavLink to="/profile" className="flex items-center rounded-full hover:bg-slate-700 p-0.5" title="My Profile">
                <img
                  src={profilePicUrl}
                  alt="Profile"
                  className="h-8 w-8 rounded-full object-cover border-2 border-slate-500"
                />
              </NavLink>

              <button
                className="rounded border border-slate-500 bg-transparent px-3 py-1.5 text-sm text-slate-300 no-underline transition-colors duration-200 hover:bg-slate-700 hover:border-slate-400"
                title="Log Out"
              >
                Logout
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
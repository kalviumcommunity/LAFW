import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = '2024'; // Static year

  return (
    <footer className="bg-slate-800 text-slate-400 mt-auto">
      <div className="container mx-auto px-4 py-8 text-center">
        {/* Copyright Text */}
        <p className="text-sm">
          © {currentYear} Founder's Hub. All Rights Reserved.
        </p>

        {/* Optional Links */}
        <nav className="mt-4 text-sm">
          <Link
            to="/disclaimer"
            className="hover:text-white hover:underline mx-3 transition-colors duration-200"
          >
            Disclaimer & Agreement
          </Link>
          <span className="text-slate-600">|</span>
          <Link
            to="/guidelines"
            className="hover:text-white hover:underline mx-3 transition-colors duration-200"
          >
            Guidelines
          </Link>
           <span className="text-slate-600">|</span>
           <Link
            to="/contact"
            className="hover:text-white hover:underline mx-3 transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
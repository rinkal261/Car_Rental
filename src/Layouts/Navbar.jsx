import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu">
          <li className="menu-list">
            <Link to="/" className="menu-a">
              Home
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/cars" className="menu-a">
              Cars
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/services" className="menu-a">
              Service
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/recentbooking" className="menu-a">
              Recent Booking
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/contact" className="menu-a">
              Contacts
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/about" className="menu-a">
              About
            </Link>
          </li>
          <li className="menu-list">
            <Link to="/login" className="menu-a">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

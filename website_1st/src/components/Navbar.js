import React from "react";
import "./navbar.css";
import { FaLinkedinIn, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <section className="img">
              <img src="gyb_logo_192.jpg" alt="GYB_Logo" />
            </section>
            <span>G</span>et
            <span>Y</span>our
            <span>B</span>ook
          </h2>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/notes">Notes</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/company/get-your-book-nitp/mycompany/"
                target="_next"
              >
                <FaLinkedinIn className="linkedIN" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/getyourbookgyb/" target="_next">
                <FaFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/gyb_nitp/?utm_medium=copy_link"
                target="_next"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;

import React from 'react';
import './Navbar.css'; // Pure import without "styles from"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">NS.</div>
      <ul className="navLinks">
        <li><a href="#about">About me</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#branding">Branding</a></li>
        <li><a href="#contact" className="contactBtn">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
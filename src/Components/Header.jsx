/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-links${isOpen ? " active" : ""}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
        <a href="#footer" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </div>
  );
};

export default Header;

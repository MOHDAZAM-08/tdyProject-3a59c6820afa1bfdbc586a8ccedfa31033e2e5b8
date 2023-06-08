import React, { useState } from 'react';
import '../App.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container ${isOpen ? 'open' : ''}`}>
      <button className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu} />
      <div className={`backdrop ${isOpen ? 'open' : ''}`} />
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <nav>
          <a href="#" className="link">
            Home
          </a>
          <a href="#" className="link">
            About
          </a>
          <a href="#" className="link">
            Services
          </a>
          <a href="#" className="link">
            Projects
          </a>
          <a href="#" className="link">
            Contact Us
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

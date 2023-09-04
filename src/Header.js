// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav>
        <h1>My Portfolio</h1>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

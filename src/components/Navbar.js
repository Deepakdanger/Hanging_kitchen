import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav1">
    <div className="nav_title1">
      <div className="nav_title2">
        <div className="title swing1">
          <h1 className="pro">Han</h1>
          <h1 className="glow">gin</h1>
          <h1 className="pro">g</h1>
        </div>
        <div>
          <h1 className="pro1">Kitchen</h1>
        </div>
      </div>
    </div>
    <p className="right">
      <Link to="/">
        <p className="data">Home</p>
      </Link>
    </p>
  </nav>
);

export default Navbar;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return(
    <nav className="navbar-nav bg-dark navbar-dark py-4">
      <div className="container d-flex">
        <span className="navbar-brand">{props.title}</span>
        <ul className="navbar-nav d-inline-flex flex-row ml-auto">
          <li className="nav-item mr-3">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item mr-3">
            <NavLink to="/services" className="nav-link">Services</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
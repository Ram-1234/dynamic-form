import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <h1 className="logo">Awesome</h1>
      </div>
      <nav className="header_pages">
        <NavLink className="navlink" to="/">
          HOME
        </NavLink>
        <NavLink className="navlink" to="/users">
          USERS
        </NavLink>
        <NavLink className="navlink" to="/posts">
          POSTS
        </NavLink>
        <NavLink className="navlink" to="/contact">
          CONTACT
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

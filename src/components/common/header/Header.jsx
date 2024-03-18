import React, { useState } from "react";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import Logo from "../../images/Logo.png";
import "./header.css";

const Header = () => {
  const [navList, setNavList] = useState(false);

  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="nav">
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="button flex">
                  <Link to="/login">Login</Link>
            <button className="btn1">Try For Free</button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

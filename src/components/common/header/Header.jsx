import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import "./header.css";
import { Link } from "react-scroll";
import { UserAuth } from "../../../context/AuthContext";

const Header = () => {

    const { user, logOut } = UserAuth();

  const [navList, setNavList] = useState(false);

  const toggleNavList = () => {
    setNavList(false); 
  };



  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {/* <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavList}
              >
                Home
              </Link>
            </li> */}
            <li>
              <Link
                to="myurls"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavList}
              >
                My URLs
              </Link>
            </li>
            <li>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavList}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="price"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavList}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="analytics"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavList}
              >
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={toggleNavList}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="button flex">
          <a href="/login">Login</a>
          <button className="try-for-free">
            <Link
              to="price"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Try For Free
            </Link>
          </button>{" "}
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
        {user?.displayName ? (
          <button onClick={handleSignOut}>Logout</button>
        ) : (
          <Link to="/login">Sign in</Link>
        )}
      </div>
    </header>
  );
};

export default Header;

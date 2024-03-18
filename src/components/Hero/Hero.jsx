import React from "react";
import Vector3 from "../images/Vector3.png";
import Group3 from "../images/Group3.png";
import Group2 from "../images/Group2.png";
import "./hero.css";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_main">
        <div className="hero-content">
          <h1 className="hero_text">
            Optimize Your Online Experience with Our <br /> Advanced
            <span className="hero-mini-image"> URL Shortening </span>
            Solution
          </h1>
          <img alt="vector3" src={Vector3} />
        </div>
      </div>

      <br />
      <div>
        <p>
          Personalize your shortened URLs to align with your brand identity.
          Utilize custom slugs, <br /> branded links, and domain customization
          options to reinforce your brand presence and <br /> enhance user
          engagement.
        </p>
      </div>

      <div className="main-log">
        <Link to="/signup" className="log-btn">
          SignUp
        </Link>

        <p className="log-lnk">Learn more</p>
      </div>

      <div className="fig">
        <img alt="Group2" src={Group2} />
      </div>

      <div className="platform">
        <div>
          <img alt="image3" src={Group3} />
        </div>{" "}
      </div>
    </section>
  );
  }

export default Hero
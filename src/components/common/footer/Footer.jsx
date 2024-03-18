import React from "react";
import "./footer.css";
import vector from "../../images/Vector.png";
import vector2 from "../../images/Vector 2.png";
import scissor from "../../images/SCISSOR.png";
import twitter from "../../images/i.fi-social-twitter.png";
import linkedin from "../../images/i.fi-social-linkedin.png";
import facebook from "../../images/i.fi-social-facebook.png";
import instagram from "../../images/svg.feather.png";

export const footer = [
  {
    title: "Why Scissor ?",
    text: [
      { list: "Scissors 101" },
      { list: "Integrations & API" },
      { list: "Pricing" },
    ],
  },
  {
    title: "Solutions",
    text: [
      { list: "Social Media" },
      { list: "Digital Marketing" },
      { list: "Customer Service" },
      { list: "For Developers" },
    ],
  },
  {
    title: "Products",
    text: [
      { list: "Link Management" },
      { list: "QR Codes" },
      { list: "Link-In-Bio" },
    ],
  },

  {
    title: "Company",
    text: [
      { list: "About Scissor" },
      { list: "Careers" },
      { list: "Partners" },
      { list: "Press" },
      { list: "Contact" },
      { list: "Reviews" },
    ],
  },

  {
    title: "Resources",
    text: [
      { list: "Blog" },
      { list: "Resource Library" },
      { list: "Developers" },
      { list: "App Connectors" },
      { list: "Support" },
      { list: "Trust Center" },
      { list: "Mobile App" },
    ],
  },
  {
    title: "Features",
    text: [
      { list: "Link Management" },
      { list: "QR Codes" },
      { list: "Link-In-Bio" },
    ],
  },

  {
    title: "Legal",
    text: [
      { list: "About Scissor" },
      { list: "Careers" },
      { list: "Partners" },
      { list: "Press" },
      { list: "Contact" },
      { list: "Reviews" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src={vector} alt="" className="vector_image1" />
              <img src={vector2} alt="" className="vector_image2" />

              <img src={scissor} alt="" />
            </div>

            {/* socails */}

            <div className="socials">
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>
          <div className="footer_wrapper">
            {footer.map((val) => (
              <div className="box">
                <h3>{val.title}</h3>
                <ul>
                  {val.text.map((items) => (
                    <li> {items.list} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;


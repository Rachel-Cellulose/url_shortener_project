import React from "react";
// import Heading from "../../common/Heading";
import "./price.css";
import Line70 from "../../images/Line70.png"
import checkcircle from "../../images/checkcircle.png";

const Price = () => {
  return (
    <>
        
          <section className="price" id="price">
            <div>
              <div className="price-hero">
                {/* <img src={Line70} alt="" className="line" /> */}
                <h4>
                  A <span>price perfect</span> for your needs.
                </h4>

                <p>
                  From catering for your personal, business, event, socials
                  needs, you can be rest assured we have you in mind in our
                  pricing.
                </p>
              </div>
              <div className="price-choice">
                <div className="choice basic">
                  <p className="h5">Basic</p>
                  <h3>Free</h3>
                  <p>Free plan for all users</p>
                  <ul>
                    <li>
                      <img alt="" src={checkcircle} />
                      Unlimited URL Shortening
                    </li>
                    <li>
                      <img alt="" src={checkcircle} />
                      Basic Link Analytics
                    </li>
                    <li>
                      <img alt="" src={checkcircle} />
                      Customizable Short Links
                    </li>
                    <li>
                      <img alt="" src={checkcircle} />
                      Standard Support
                    </li>
                    <li>
                      <img alt="" src={checkcircle} />
                      Ad-supported
                    </li>
                  </ul>
                </div>

                <div className="choice-main">
                  <p className="h5">Professional</p>
                  <h3>$15/month</h3>
                  <p>Ideal for business creators</p>
                  <ul>
                    <li>
                      <img alt="" src={checkcircle} />
                      Enhanced Link Analytics
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      Custom Branded Domains
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      Advanced Link Customization
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      Priority Support
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      Ad-free Experience
                    </li>
                  </ul>
                </div>
                <div className="choice teams">
                  <p className="h5">Teams</p>
                  <h3>$25/month</h3>
                  <p>Share with up to 10 users</p>

                  <ul>
                    <li>
                      
                      <img alt="" src={checkcircle} />
                      Team Collaboration
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      User Roles and Permissions
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      Enhanced Security
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      API Access
                    </li>
                    <li>
                      {" "}
                      <img alt="" src={checkcircle} />
                      Dedicated Account Manager
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="price-log">
              <div price-btns>
                {/* <button className="custom-price-btn">Get Custom Pricing</button> */}
                <button className="select-price-btn">Select Pricing</button>
              </div>
            </div>
          </section>
    </>
  );
};

export default Price;

import React from "react";
import "./Features.css";
import { awards } from "../../data/Data";
import Line70 from "../../images/Line70.png";
import link2 from "../../images/link2.png";
import edit from "../../images/edit.png";
import grid from "../../images/grid.png";
import activity from "../../images/activity.png";

const Features = () => {
  return (
    <>
      <section className="features padding">
        <div className="container">
          <div>
            <h1 className="text">
              {" "}
              One Stop. <br />
              Four Possibilities.
            </h1>
          </div>
          <div className="content grid4 mtop">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                {val &&
                  typeof val === "object" &&
                  "num" in val &&
                  "name" in val && (
                    <>
                      <h1>{val.num}</h1>
                      <p>{val.name}</p>
                    </>
                  )}
              </div>
            ))}
          </div>
        </div>

        <div class="mini-container">
          <div class="mini">
            <div class="mini-copy">
              <div className="line">
                <div className="image-container">
                  <img src={Line70} alt="" />
                </div>{" "}
                <h4>
                  Why choose <span>Scissors</span>
                </h4>
              </div>
              <p>
                Scissors is the hub of everything that has to do with your link
                management. We shorten your URLs, allow you creating custom ones
                for your personal, business, event usage. Our swift QR code
                creation, management and usage tracking with advance analytics
                for all of these is second to none.
              </p>
            </div>

            <div className="mini-item odd">
              <img src={link2} alt="" />
              <h5>URL Shortening</h5>
              <p>
                Scissor allows you to shorten URLs of your business, events.
                Shorten your URL at scale, URL redirects.
              </p>
            </div>
            <div className="mini-item">
              <img src={edit} alt="" />
              <h5>Custom URLs</h5>
              <p>
                With Scissor, you can create custom URLs, with the length you
                want! A solution for socials and businesses.
              </p>
            </div>
            <div className="mini-item odd">
              <img src={grid} alt="" />
              <h5>QR Codes</h5>
              <p>
                Generate QR codes to your business, events. Bring your audience
                and customers to your doorstep with this scan and go solution.
              </p>
            </div>
            <div className="mini-item">
              <img src={activity} alt="" />
              <h5>Data Analytics</h5>
              <p>
                Receive data on the usage of either your shortened URL, custom
                URLs or generated QR codes. Embedded to monitor progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

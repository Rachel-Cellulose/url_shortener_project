import React from "react";
import "./login.css";
import eye from "../../images/eye-vector.png";
import google from "../../images/google.png";
import apple from "../../images/Path.png";
import { Link } from "react-router-dom";

const LogIn = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="container forms">
      <div className="form form">
        <div className="form-content">
          <h3>Log in with</h3>

          <form onSubmit={handleSubmit}>
            <div className="form_main">
              <div className="media-options">
                <a href="#" className="field google">
                  <img src={google} alt="" className="google-img" />
                  <span>Google</span>
                </a>
              </div>

              <div className="media-options">
                <a href="#" className="field facebook">
                  <img src={apple} alt="" className="apple-img" />
                  <span>Apple</span>
                </a>
              </div>
            </div>

            <div className="line"></div>

            <div className="field input-field">
              <input
                type="email"
                placeholder="Email address or username"
                className="input"
              />
            </div>

            <div>
              <div className="field input-field">
                <input
                  type="password"
                  placeholder="Password"
                  className="password"
                />
                <img src={eye} alt="" className="eye-icon" />
              </div>
            </div>

            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot your password?
              </a>
            </div>

            <div className="form_text">
              <div className="field button-field">
                <button>Log in</button>
              </div>

              <div className="form-link">
                <span>
                  Don't have an account?
                  <Link to="/signup" className="link signup-link">
                    SignUp
                  </Link>
                </span>
              </div>

              <p>
                By signing in with an account, you agree to <br />
                <span className="text_note">
                  Sciccor's Terms of Service, Privacy Policy and Acceptable Use
                  Policy.
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;

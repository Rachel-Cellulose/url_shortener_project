import React from 'react'
import { useState } from "react";
// import Footer from "../common/footer/Footer";
import LogIn from '../../home/login/LogIn';
import FormInput from '../FormInput';
import { Link } from "react-router-dom";
import eye from "../../images/eye-vector.png";

import google from "../../images/google.png";
import apple from "../../images/Path.png";
import './signupform.css';


const SignUpForm = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  console.log("re-rendered");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="container form">
      <div className="form form">
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <h2>Sign Up withhhhhhh</h2>

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

            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}

            <div className="field button-field">
              <button>Sign up with Email</button>
            </div>
            <div className="form-link">
              <span>
                Already have an account?
                <Link to="/login" className="">
                  LogIn
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
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm

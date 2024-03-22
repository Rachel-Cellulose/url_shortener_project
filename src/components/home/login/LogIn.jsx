import {React, useEffect,useState} from "react";
import "./login.css";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Account from "../account/Account";
import eye from "../../images/eye-vector.png";
import googleImage from "../../images/google.png"
import apple from "../../images/Path.png";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const LogIn = () => {
    const [values, setValues] = useState({
      email: "",
      password: "",
    });

  const { googleSignIn, user } = UserAuth();


const [errors, setErrors] = useState({
  email: "",
  password: "",
});

  const inputs = [
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
    
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
    const newErrors = { ...errors };

    inputs.forEach((input) => {
      if (input.required && !values[input.name]) {
        newErrors[input.name] = `${input.label} is required`;
        valid = false;
      } else {
        newErrors[input.name] = "";
      }
    });


    if (values) {
      await addDoc(collection(db, "form"), {
        email: values,
        timestamp: serverTimestamp(),
      });
      setValues({
        email: "",
        password: "",
      });
    }
  };


  
 

  useEffect(() => {
    if (user != null) {
      // navigate("/account");
    }
  }, [user]);


  


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  
  return (
    <section className="container forms">
      <div className="form form">
        <div className="form-content">
          <h3>Log in with</h3>

          <form onSubmit={handleSubmit}>
            <div className="form_main">
              <div className="media-options">
                <a href="#" className="field google">
                  <img src={googleImage} alt="" className="google-img" />
                  Google
                </a>
              </div>

              <div className="media-options">
                <a href="#" className="field facebook">
                  <img src={apple} alt="" className="apple-img" />
                  Apple
                </a>
              </div>
            </div>

            <div className="line"></div>

            {inputs.map(
              (input) =>
                input.name !== "confirmPassword" && ( 
                  <div key={input.id} className="field">
                    <input
                      type={input.type}
                      placeholder={input.placeholder}
                      value={values[input.name]}
                      onChange={onChange}
                      name={input.name}
                      required={input.required}
                    />
                    {errors[input.name] && (
                      <span className="error">{errors[input.name]}</span>
                    )}
                  </div>
                )
            )}

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

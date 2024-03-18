import Header from "../common/header/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Hero from "../Hero/Hero";
// import Footer from "../common/footer/Footer";
import LogIn from "../home/login/LogIn";
import FormInput from "../Form/FormInput";
import { Link } from "react-router-dom";
import SignUpForm from "../Form/SignUpForm/SignUpForm";





const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hero" element={<Hero />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default Pages;

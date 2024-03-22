import Header from "../common/header/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Hero from "../Hero/Hero";
import Footer from "../common/footer/Footer";
import LogIn from "../home/login/LogIn";
import FormInput from "../Form/FormInput";
import { Link } from "react-router-dom";
import SignUpForm from "../Form/SignUpForm/SignUpForm";
import MyUrls from "../home/myurls/MyUrls";
import Faq from "../home/faqs/Faqs";
import Features from "../home/features/Features";
import Price from "../home/price/Price";





const Pages = () => {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hero" element={<Hero />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route exact path="/myurls" element={<MyUrls />} />
          <Route exact path="/faqs" element={<Faq />} />
          <Route exact path="/price" element={<Price />} />
          <Route exact path="/features" element={<Features />} />
        </Routes>

        <Footer />
      </>
    </>
  );
};

export default Pages;

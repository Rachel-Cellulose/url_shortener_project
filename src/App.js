import "./App.css"
import { useState } from "react";
import LogIn from "./components/home/login/LogIn"
import Pages from "./components/pages/Pages"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/common/header/Header.jsx"
import Home from "./components/home/Home";
import Hero from "./components/Hero/Hero";
import SignUpForm from "./components/Form/SignUpForm/SignUpForm";
import MyUrls from "./components/home/myurls/MyUrls";
import Faq from "./components/home/faqs/Faqs";
import Price from "./components/home/price/Price";
import Features from "./components/home/features/Features";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./components/home/account/Account";


function App() {
  return (
    <>
      {/* <Pages /> */}

      <AuthContextProvider>
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
          <Route exact path="/account" element={<Account />} />
        </Routes>
      </AuthContextProvider>
      <>{/* <Footer /> */}</>
    </>
  );
}

export default App

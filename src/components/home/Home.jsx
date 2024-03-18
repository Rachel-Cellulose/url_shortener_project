// import React from "react";
// import Awards from "./awards/Awards";
import { useState } from "react";
import FormInput from "../Form/FormInput";

import Features from "./features/Features";
import Hero from "../../components/Hero/Hero"
// import Location from "./location/Location";
import Price from "./price/Price";
import FAQs from "./faqs/Faqs";
import MyUrls from "./myurls/MyUrls";
import Footer from "../common/footer/Footer";
import LogIn from "./login/LogIn";
import LinkResult from "./LinkResult";
import SignUpForm from "../Form/SignUpForm/SignUpForm";
// import Recent from "./recent/Recent";
// import Team from "./team/Team";

const Home = () => {
    const [inputValue, setInputValue] = useState("");

  return (
    <>
      <Hero />
      {/* <FormInput /> */}
      <Features />
      <Price />
      <MyUrls setInputValue={setInputValue} />
      <FAQs />
      <LinkResult inputValue={inputValue} />



      {/* <form>
        <FormInput  placeholder="Username"/>
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Password"/>
        <FormInput placeholder="Retype Password"/>
      </form> */}
      {/* <LogIn /> */}
      {/* <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price /> */}
    </>
  );
};

export default Home;

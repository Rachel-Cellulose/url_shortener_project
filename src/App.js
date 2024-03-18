import "./App.css"
import { useState } from "react";
import LogIn from "./components/home/login/LogIn"
import Pages from "./components/pages/Pages"

function App () {
  const [inputValue, setInputValue] =useState("");
  return (
    <>
      <Pages />
      {/* <LogIn /> */}
     
    </>
  );
}

export default App

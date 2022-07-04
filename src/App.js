import { useState } from "react";
import Nav from "./Components/Nav";
import Textutils from "./Components/Textutils";

function App() {
  const [mode, setMode]= useState('light')
  const [darkText, setDarkText]= useState("Enable dark mode")

  const toggleMode =()=>{
    if(mode=== "light"){
      setMode("dark")
      document.body.style.backgroundColor='#042743';
      setDarkText("Enable light mode")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white";
      setDarkText("Enable dark mode")
    }
  }
  return (
    <>
      <Nav mode={mode} toggleStyle={toggleMode} darkText={darkText} />
      <Textutils mode={mode} />
    </>
  );
}

export default App;

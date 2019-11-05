import React from "react";
import "./App.css";
import Header from "./Components/Header.js";
import Logo from "./images/Logo.png";
import Hero from "./Components/Hero.js";
import Box from "./Components/Box.js";

function App() {
  return (
    <>
      <Header photo={Logo}></Header>

      <Hero text="2001 : L'ODYSSEE DE L'ESPACE"></Hero>

      <Box></Box>
    </>
  );
}

export default App;

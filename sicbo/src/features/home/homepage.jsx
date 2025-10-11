import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Gamepage from "./components/game/Gamepage";
const Homepage = () => {
  return (
    <div className="app">
      <Header></Header>
      <Gamepage></Gamepage>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;

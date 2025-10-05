import React, { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Profile from "./components/footer/profile/Profile";
const Homepage = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className="app">
      <Header></Header>
      {/* <Profile></Profile> */}
      <Footer></Footer>
    </div>
  );
};

export default Homepage;

import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

const Homepage = () => {
  const [popup, setPopup] = useState(null);

  return (
    <div className="app">
      <Header />
      <Body />
      <Footer setPopup={setPopup} />
      {popup && <Popup type={popup} onClose={() => setPopup(null)} />}
    </div>
  );
};

export default Homepage;

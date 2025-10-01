import React from "react";
import "./Footer.scss";
import FooterButton from "./FooterButton";

const Footer = ({ setPopup }) => {
  return (
    <footer className="footer">
      <FooterButton label="RÚT TIỀN" />
      <FooterButton label="NHIỆM VỤ" onClick={() => setPopup("nhiemvu")} />
      <FooterButton label="HỘP THƯ" onClick={() => setPopup("hopthu")} />
      <FooterButton label="MENU" />
    </footer>
  );
};

export default Footer;

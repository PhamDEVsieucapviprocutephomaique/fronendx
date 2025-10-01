import React from "react";
import "./FooterButton.scss";

const FooterButton = ({ label, onClick }) => {
  return (
    <div className="footer-button" onClick={onClick}>
      <div className="icon">🎁</div>
      <div className="text">{label}</div>
    </div>
  );
};

export default FooterButton;

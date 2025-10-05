import React from "react";
import "./Menu.scss";
import {
  FaComments,
  FaPhoneAlt,
  FaUsers,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";

const Menu = ({ onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="side-menu-wrapper" onClick={handleBackdropClick}>
      <div className="side-menu-container">
        <div className="side-menu-content">
          <div className="side-menu-item">
            <FaComments className="side-menu-icon" />
            <div className="side-menu-text">LIVE CHAT</div>
          </div>

          <div className="side-menu-item">
            <FaPhoneAlt className="side-menu-icon" />
            <div className="side-menu-text">HOTLINE</div>
          </div>

          <div className="side-menu-item">
            <FaUsers className="side-menu-icon" />
            <div className="side-menu-text">CỘNG ĐỒNG</div>
          </div>

          <div className="side-menu-item">
            <FaCog className="side-menu-icon" />
            <div className="side-menu-text">CAI ĐẶT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

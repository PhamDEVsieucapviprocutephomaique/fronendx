import React, { useState } from "react";
import "./Footer.scss";
import Profile from "./profile/Profile";
import Mission from "./mission/Mission";
import Cashout from "./cashout/Cashout";
import Mailbox from "./mailbox/Mailbox";
import Recharge from "./recharge/Recharge";
import {
  FaUser,
  FaMoneyBillWave,
  FaCoins,
  FaTasks,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import Menu from "./menu/Menu";

const Footer = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };

  const handleCloseComponent = () => {
    setActiveComponent(null);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "profile":
        return <Profile onClose={handleCloseComponent} />;
      case "withdraw":
        return <Cashout onClose={handleCloseComponent} />;
      case "deposit":
        return <Recharge onClose={handleCloseComponent} />;
      case "mission":
        return <Mission onClose={handleCloseComponent} />;
      case "mailbox":
        return <Mailbox onClose={handleCloseComponent} />;
      case "menu":
        return <Menu onClose={handleCloseComponent} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="footer">
        <div className="footer-container">
          {/* Profile Section - 1/4 width */}
          <div
            className="profile-section"
            onClick={() => handleButtonClick("profile")}
          >
            <div className="profile-content">
              <div className="avatar-container">
                <div className="avatar">
                  <FaUser className="avatar-icon" />
                </div>
              </div>
              <div className="profile-info">
                <div className="username">PWD</div>
                <div className="balance">124,512,000,000đ</div>
              </div>
            </div>
          </div>

          {/* Withdraw Button */}
          <button
            className="footer-btn withdraw-btn"
            onClick={() => handleButtonClick("withdraw")}
          >
            <div className="btn-content">
              <div className="btn-icon">
                <FaMoneyBillWave className="icon" />
              </div>
              <div className="btn-text">Rút tiền</div>
            </div>
          </button>

          {/* Deposit Button - Larger with yellow background */}
          <button
            className="footer-btn deposit-btn"
            onClick={() => handleButtonClick("deposit")}
          >
            <div className="btn-content">
              <div className="btn-icon">
                <FaCoins className="icon" />
              </div>
              <div className="btn-text">Nạp tiền</div>
            </div>
          </button>

          {/* Remaining three buttons */}
          <button
            className="footer-btn mission-btn"
            onClick={() => handleButtonClick("mission")}
          >
            <div className="btn-content">
              <div className="btn-icon">
                <FaTasks className="icon" />
              </div>
              <div className="btn-text">Nhiệm vụ</div>
            </div>
          </button>

          <button
            className="footer-btn mailbox-btn"
            onClick={() => handleButtonClick("mailbox")}
          >
            <div className="btn-content">
              <div className="btn-icon">
                <FaEnvelope className="icon" />
              </div>
              <div className="btn-text">Hộp thư</div>
            </div>
          </button>

          <button
            className="footer-btn menu-btn"
            onClick={() => handleButtonClick("menu")}
          >
            <div className="btn-content">
              <div className="btn-icon">
                <FaBars className="icon" />
              </div>
              <div className="btn-text">Menu</div>
            </div>
          </button>
        </div>
      </div>

      {/* Hiển thị component tương ứng khi click */}
      {activeComponent && (
        <div className="component-content">{renderComponent()}</div>
      )}
    </>
  );
};

export default Footer;

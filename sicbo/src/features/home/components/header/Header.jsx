// Header.jsx
import React from "react";
import "./Header.scss";
import logoImage from "../../../../image/home/header/image.png";

const Header = () => {
  return (
    <header className="header">
      {/* Vùng bên trái - Thông báo thắng lớn */}
      <div className="header-left">
        <span className="text-white">Tây Du Ký</span>
        <span className="username">88888888cz</span>
        <span className="text-white">thắng lớn</span>
        <span className="win-amount">6.15</span>
      </div>

      {/* Vùng giữa - Logo và biểu tượng loa */}
      <div className="header-center">
        <div className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
      </div>

      {/* Vùng bên phải - Thông báo tiền ảo */}
      <div className="header-right">
        <div className="speaker-icon">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
            <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="#FFD700" />
            <path
              d="M16 12C16 14.2091 14.2091 16 12 16"
              stroke="#FFD700"
              strokeWidth="2"
            />
            <path
              d="M19 12C19 15.866 15.866 19 12 19"
              stroke="#FFD700"
              strokeWidth="2"
            />
          </svg>
        </div>
        <span className="deposit-withdraw">Nạp/Rút</span>
        <span className="text-white">bằng</span>
        <span className="crypto-text">TIỀN ẢO</span>
        <span className="text-white">để được xử lý nhanh hơn</span>
      </div>
    </header>
  );
};

export default Header;

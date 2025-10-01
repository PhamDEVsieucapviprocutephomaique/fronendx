import React from "react";
import "../components/Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="top-alert">
        <span className="warning">Cảnh báo: Truy cập đúng địa chỉ GO88.CA</span>
        <span className="hotline">Hotline: 0388.90.8888</span>
      </div>
      <div className="logo-menu">
        <div className="logo">GO88</div>
        <nav className="menu">
          {["ALL GAMES", "YÊU THÍCH", "GAME BÀI", "SLOTS", "LIVE", "KHÁC"].map(
            (tab, i) => (
              <button key={i} className={i === 0 ? "active" : ""}>
                {tab}
              </button>
            )
          )}
        </nav>
        <button className="livechat">💬 Livechat</button>
      </div>
    </header>
  );
};

export default Header;

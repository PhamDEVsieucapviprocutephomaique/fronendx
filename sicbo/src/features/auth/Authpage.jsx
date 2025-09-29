import React, { useEffect, useState } from "react";
import "./AUthpage.scss";
import Login from "./components/Login";
import Register from "./components/Register";

const Authpage = () => {
  const [particles, setParticles] = useState([]);
  const [activeform, setActiveform] = useState(null); //login hoặc register

  useEffect(() => {
    // Tạo particles cho hiệu ứng
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 3,
          delay: Math.random() * 5,
          duration: Math.random() * 4 + 3,
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Tạo particles mới liên tục
    const interval = setInterval(createParticles, 6000);
    return () => clearInterval(interval);
  }, []);
  const handelregister = (e) => {
    // console.log(activeform);
    e.preventDefault();
    setActiveform("register");
  };
  const handleClose = (e) => {
    setActiveform(null);

    // console.log(activeform);
    //
  };
  const handelogin = (e) => {
    e.preventDefault();
    setActiveform("login");
  };
  return (
    <div className="go88-container">
      {/* Background Light Effects */}
      <div className="light-rays"></div>
      <div className="light-burst"></div>
      <div className="radial-glow"></div>

      {/* Bokeh Effects */}
      <div className="bokeh-effects">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className={`bokeh bokeh-${index + 1}`}
            style={{
              "--delay": `${index * 0.5}s`,
              "--duration": `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              "--x": `${particle.x}%`,
              "--y": `${particle.y}%`,
              "--size": `${particle.size}px`,
              "--delay": `${particle.delay}s`,
              "--duration": `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="main-content">
        {/* Main Logo Section - Theo ảnh mới */}
        <div className="logo-section">
          {/* 4 lá bài phía trên với vương miện */}
          <div className="cards-with-crown">
            <div className="crown">👑</div>
            <div className="cards-fan">
              <div className="playing-card card-1">
                <div className="card-content">
                  <span className="card-corner red">A</span>
                  <span className="card-suit red">♦</span>
                </div>
              </div>
              <div className="playing-card card-2">
                <div className="card-content">
                  <span className="card-corner black">A</span>
                  <span className="card-suit black">♠</span>
                </div>
              </div>
              <div className="playing-card card-3">
                <div className="card-content">
                  <span className="card-corner red">A</span>
                  <span className="card-suit red">♦</span>
                </div>
              </div>
              <div className="playing-card card-4">
                <div className="card-content">
                  <span className="card-corner black">A</span>
                  <span className="card-suit black">♠</span>
                </div>
              </div>
            </div>
          </div>

          {/* Logo chính với viền lục giác */}
          <div className="hexagon-logo">
            <div className="hexagon-border">
              <div className="logo-text">
                X
                <span className="logo-o-spade">
                  .<span className="spade-icon"></span>
                </span>
                28
              </div>
            </div>
          </div>
        </div>

        {/* Website URL */}
        <div className="website-section">
          <div className="url-container">
            <span className="url-text">XGAME.COM</span>
          </div>
        </div>
        <div className="buttons-section">
          <button
            className="auth-button register-button"
            onClick={(e) => handelregister(e)}
          >
            ĐĂNG KÝ
          </button>
          <button
            className="auth-button login-button"
            onClick={(e) => handelogin(e)}
          >
            ĐĂNG NHẬP
          </button>
        </div>

        <div className="warning-text">
          Hiện nay có rất nhiều trang web giả mạo. Quý khách vui lòng truy cập
          đúng Địa chỉ
          <a
            href="https://go88.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="website-link"
          >
            X28.COM
          </a>
        </div>

        {/* Additional Icon Buttons - Ngay dưới 2 nút chính */}
      </div>
      {/* Additional Icon Buttons - Sát lề phải */}
      <div className="icon-buttons-section">
        <button className="icon-button download-button">
          <span className="icon">⬇</span>
          <span className="text">TẢI APP</span>
        </button>
        <button className="icon-button support-button">
          <svg className="icon" viewBox="0 0 24 24" width="84" height="84">
            {/* Vòng tròn mặt */}
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Mắt */}
            <circle cx="8.5" cy="10" r="1.5" fill="currentColor" />
            <circle cx="15.5" cy="10" r="1.5" fill="currentColor" />
            {/* Miệng cười nhỏ */}
            <path
              d="M9 15.5C10 16.5 14 16.5 15 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
          <span className="text">HỖ TRỢ</span>
        </button>
      </div>
      {
        // login/logout fomr
        activeform === "login" ? (
          <Login onClose={(e) => handleClose(e)}></Login>
        ) : activeform === "register" ? (
          <Register onClose={(e) => handleClose(e)}></Register>
        ) : null
      }
    </div>
  );
};

export default Authpage;

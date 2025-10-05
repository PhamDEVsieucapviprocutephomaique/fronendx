import React from "react";
import "./Mission.scss";

const Mission = ({ onClose }) => {
  return (
    <div className="mission-wrapper">
      <div className="mission-container">
        {/* Nút Close */}
        <button className="close-mission-btn" onClick={onClose}>
          ×
        </button>

        {/* Phần 1: Tab Nhiệm vụ và Sự kiện */}
        <div className="mission-tabs">
          <button className="tab active">Nhiệm vụ</button>
          <button className="tab">Sự kiện</button>
        </div>

        {/* Phần 2: Nội dung mission */}
        <div className="mission-content">
          <div className="mission-card">
            {/* Phần bên trái */}
            <div className="mission-left">
              <div className="mission-icon">⭐</div>
              <div className="mission-info">
                <div className="mission-header-row">
                  <span className="mission-title">
                    Hoàn thành nạp ngân hàng
                  </span>
                  <span className="mission-progress">(0/1,000,000)</span>
                </div>
                <div className="mission-description">
                  Nạp thành công 1 triệu qua hình thức ngân hàng
                </div>
              </div>
            </div>

            {/* Phần bên phải */}
            <div className="mission-right">
              <div className="mission-reward">
                <div className="reward-icon">🪙</div>
                <div className="reward-amount">500,000,000</div>
              </div>
              <button className="mission-action-btn">LÀM</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;

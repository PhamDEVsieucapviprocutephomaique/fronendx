import React from "react";
import "./Mailbox.scss";

const Mailbox = ({ onClose }) => {
  return (
    <div className="mailbox-wrapper">
      <div className="mailbox-container">
        {/* Nút Close */}
        <button className="close-mailbox-btn" onClick={onClose}>
          ×
        </button>

        {/* Header */}
        <div className="mailbox-header">
          <h1>HỘP THƯ</h1>
        </div>

        {/* Content */}
        <div className="mailbox-content">
          <div className="mailbox-left">
            <div className="message-content">
              <div className="message-text">
                Chào mừng bạn đến với cổng game Jocker hàng đầu châu Âu
              </div>
            </div>
          </div>

          <div className="mailbox-right">
            <div className="notification-card">
              <div className="notification-header">
                <div className="notification-title">
                  Thông báo người dùng mới
                </div>
              </div>
              <div className="notification-time">5 phút trước</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbox;

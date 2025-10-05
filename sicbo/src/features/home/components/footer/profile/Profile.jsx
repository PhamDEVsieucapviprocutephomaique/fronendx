import React from "react";
import "./Profile.scss";

// Chọn 1 trong các thư viện icons dưới đây:
// Option 1: React Icons (phổ biến nhất)
import {
  FaHistory,
  FaKey,
  FaSignOutAlt,
  FaUser,
  FaPhone,
  FaLink,
} from "react-icons/fa";
// Hoặc Option 2: Material Icons
// import { History, VpnKey, ExitToApp, Person, Phone, Link } from "@mui/icons-material";
// Hoặc Option 3: Heroicons
// import { ClockIcon, KeyIcon, ArrowRightOnRectangleIcon, UserIcon, PhoneIcon, LinkIcon } from "@heroicons/react/24/outline";

const Profile = ({ onClose }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <div className="profile-header">
          <h1>Thông Tin Tài Khoản</h1>
          <button className="close-profile-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="profile-content">
          {/* Phần bên trái - Avatar và Thông tin */}
          <div className="left-panel">
            <div className="avatar-section">
              <div className="avatar">
                <FaUser className="avatar-icon" />
              </div>
              <div className="name">Nguyễn Văn A</div>
            </div>

            <div className="financial-info">
              <div className="balance-section">
                <div className="balance-label">Số Dư Tài Khoản</div>
                <div className="balance-amount">1.000.000.000 ₫</div>
              </div>

              <div className="phone-section">
                <div className="phone-label">Số Điện Thoại</div>
                <div className="phone-number">+84 123 456 789</div>
                <button className="link-phone-btn">
                  <FaLink className="btn-icon" />
                  Liên Kết SĐT
                </button>
              </div>
            </div>
          </div>

          {/* Phần bên phải - Các nút chức năng */}
          <div className="right-panel">
            <button className="action-btn history-btn">
              <FaHistory className="btn-icon" />
              <span className="btn-text">Lịch Sử Cược</span>
            </button>

            <button className="action-btn password-btn">
              <FaKey className="btn-icon" />
              <span className="btn-text">Đổi Mật Khẩu</span>
            </button>

            <button className="action-btn logout-btn">
              <FaSignOutAlt className="btn-icon" />
              <span className="btn-text">Đăng Xuất</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

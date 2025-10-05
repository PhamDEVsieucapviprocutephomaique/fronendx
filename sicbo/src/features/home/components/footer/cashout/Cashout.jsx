import React, { useState } from "react";
import "./Cashout.scss";
import {
  FaUser,
  FaUniversity,
  FaMoneyBillWave,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa";

const Cashout = ({ onClose }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý rút tiền
    console.log("Rút tiền:", amount);
  };

  return (
    <div className="cashout-wrapper">
      <div className="cashout-container">
        <div className="cashout-header">
          <h1>NẠP RÚT CHÍNH CHỦ ĐỂ ĐƯỢC XỬ LÝ NHANH HƠN</h1>
          <button className="close-cashout-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cashout-content">
          <form onSubmit={handleSubmit}>
            {/* Thông tin tài khoản */}
            <div className="info-section">
              <div className="info-item">
                <div className="info-label">
                  <FaUser className="info-icon" />
                  Tên Tài Khoản:
                </div>
                <div className="info-value">PHAM MINH DUC</div>
              </div>

              <div className="info-item">
                <div className="info-label">
                  <FaUniversity className="info-icon" />
                  Ngân Hàng:
                </div>
                <div className="info-value">MBbank - ******395</div>
              </div>
            </div>

            {/* Nhập số tiền */}
            <div className="amount-section">
              <div className="amount-header">
                <FaMoneyBillWave className="amount-icon" />
                <span>Số Tiền Rút:</span>
              </div>

              <div className="amount-input-container">
                <FaHistory className="decor-icon left-icon" />
                <input
                  type="text"
                  className="amount-input"
                  placeholder="Nhập số tiền rút"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <FaQuestionCircle className="decor-icon right-icon" />
              </div>

              <div className="min-amount">Rút tối thiểu: 200,000đ</div>
            </div>

            {/* Nút rút tiền */}
            <button type="submit" className="cashout-withdraw-btn">
              RÚT TIỀN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cashout;

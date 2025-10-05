import React, { useState } from "react";
import "./Recharge.scss";
import {
  FaWallet,
  FaCreditCard,
  FaExchangeAlt,
  FaShieldAlt,
  FaRocket,
  FaTimes,
  FaHistory,
  FaQuestionCircle,
} from "react-icons/fa";

const Recharge = ({ onClose }) => {
  const [amount, setAmount] = useState("");
  const [transactionCode, setTransactionCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nạp tiền:", amount, transactionCode);
  };

  return (
    <div className="recharge-wrapper">
      <div className="recharge-container">
        <div className="recharge-header">
          <h1>NẠP RÚT CHÍNH CHỦ ĐỂ ĐƯỢC XỬ LÝ NHANH HƠN</h1>
          <button className="close-recharge-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className="recharge-content">
          <div className="recharge-layout">
            {/* Cột trái - Thông tin ngân hàng + 3 compo nhỏ */}
            <div className="left-column">
              <div className="bank-section">
                <div className="section-title">
                  <FaCreditCard className="title-icon" />
                  <span>NGÂN HÀNG</span>
                </div>

                <div className="bank-info-card">
                  <div className="bank-header">
                    <div className="bank-logo">CODEPAY</div>
                    <div className="bank-name">Vietbank</div>
                  </div>

                  <div className="bank-details">
                    <div className="detail-item">
                      <span className="label">Số TK:</span>
                      <span className="value">000004368813</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Tên TK:</span>
                      <span className="value">Trần Thị Kiều Loan</span>
                    </div>
                    <div className="detail-item">
                      <span className="label">Chi Nhánh:</span>
                      <span className="value">Đà Nẵng</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 compo nhỏ bên trái */}
              <div className="small-sections">
                {/* Người gửi */}
                <div className="small-section">
                  <div className="section-title small-title">
                    <FaWallet className="title-icon" />
                    <span>NGƯỜI GỬI</span>
                  </div>
                  <div className="sender-info">
                    <div className="sender-name">***** MINH DUC</div>
                    <div className="verified-badge">
                      <FaShieldAlt />
                      <span>CHÍNH CHỦ</span>
                    </div>
                  </div>
                </div>

                {/* Số tiền */}
                <div className="small-section">
                  <div className="section-title small-title">
                    <FaRocket className="title-icon" />
                    <span>SỐ TIỀN</span>
                  </div>
                  <div className="amount-input-container">
                    <FaWallet className="decor-icon left-icon" />
                    <input
                      type="text"
                      className="amount-input"
                      placeholder="Số Tiền Bạn Chuyển"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <span className="currency">VND</span>
                  </div>
                </div>

                {/* Chú thích */}
                <div className="small-section">
                  <div className="section-title small-title">
                    <FaExchangeAlt className="title-icon" />
                    <span>CHÚ THÍCH (*)</span>
                  </div>
                  <div className="transaction-input-container">
                    <FaShieldAlt className="decor-icon left-icon" />
                    <input
                      type="text"
                      className="transaction-input"
                      placeholder="Điền Mã Giao Dịch"
                      value={transactionCode}
                      onChange={(e) => setTransactionCode(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Cột phải - Phương thức + Nút nạp tiền + Footer */}
            <div className="right-column">
              {/* Phương thức */}
              <div className="method-section">
                <div className="section-title">
                  <FaExchangeAlt className="title-icon" />
                  <span>PHƯƠNG THỨC</span>
                </div>
                <div className="method-options">
                  <div className="method-option active">ATM</div>
                  <div className="method-option">CODEPAY</div>
                  <div className="method-option">MOMO</div>
                </div>
              </div>

              {/* Nút nạp tiền */}
              <button
                type="submit"
                className="recharge-btn"
                onClick={handleSubmit}
              >
                <FaRocket className="button-icon" />
                <span>NẠP TIỀN</span>
              </button>

              {/* Footer icons */}
              <div className="recharge-footer">
                <div className="footer-icons">
                  <div className="footer-icon">
                    <FaHistory />
                    <span>Lịch Sử</span>
                  </div>
                  <div className="footer-icon">
                    <FaQuestionCircle />
                    <span>Hướng Dẫn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recharge;

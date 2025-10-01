import "./Login.scss";
import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/api";

const Login = ({ onClose }) => {
  const canvasRef = useRef(null);
  const [captchaText, setCaptchaText] = useState("");
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
    captcha: "",
  });
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  // validate

  const handelsubmit = async (e) => {
    e.preventDefault();

    // Xử lý dữ liệu - bỏ khoảng trống và chuyển username về chữ thường
    const updatedData = {};
    for (let key in formdata) {
      updatedData[key] =
        key === "username"
          ? formdata[key].trim().toLowerCase()
          : formdata[key].trim();
    }
    setformdata(updatedData);

    // Validate
    if (!updatedData.username) {
      setErrors("Vui lòng nhập tên đăng nhập");
      return;
    }

    if (!updatedData.password) {
      setErrors("Vui lòng nhập mật khẩu");
      return;
    }

    if (updatedData.captcha !== captchaText) {
      setErrors("Mã xác thực không đúng");
      return;
    }
    try {
      const result = await login(updatedData.username, updatedData.password);
      if (result.success) {
        navigate("/home");
        onClose(); // Đóng modal nếu có
      } else {
        setErrors(result.error || "Đăng nhập thất bại");
      }
    } catch (error) {
      setErrors("Error connect");
    }
  };
  // 3 giaay thif thong bao mat
  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        setErrors("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);
  // Tạo captcha 6 ký tự
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let text = "";
    for (let i = 0; i < 6; i++) {
      text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
  };

  // Vẽ captcha
  const drawCaptcha = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const text = generateCaptcha();
    setCaptchaText(text);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bgColors = [
      "#ffebee",
      "#e8f5e8",
      "#e3f2fd",
      "#fff3e0",
      "#f3e5f5",
      "#e0f2f1",
    ];
    const randomBgColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    ctx.fillStyle = randomBgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold 24px Arial";
    for (let i = 0; i < text.length; i++) {
      const textColors = [
        "#e74c3c",
        "#2ecc71",
        "#3498db",
        "#f39c12",
        "#9b59b6",
        "#1abc9c",
      ];
      const randomTextColor =
        textColors[Math.floor(Math.random() * textColors.length)];
      ctx.fillStyle = randomTextColor;
      ctx.save();
      ctx.translate(15 + i * 25, 35);
      ctx.rotate((Math.random() - 0.5) * 0.5);
      ctx.fillText(text[i], 0, 0);
      ctx.restore();
    }

    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.strokeStyle = `rgba(0,0,0,${Math.random() * 0.3})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  };

  useEffect(() => {
    drawCaptcha();
  }, []);

  return (
    <div className="login-overlay">
      <div className="login-form-container">
        {errors && <div className="error-notification">{errors}</div>}
        <button className="close-login-btn" onClick={onClose}>
          ×
        </button>
        <div className="header-section">
          <div className="top-line"></div>
          <h2>ĐĂNG NHẬP</h2>
          <div className="horizontal-line"></div>
          <div className="left-line"></div>
          <div className="right-line"></div>
        </div>
        <form className="login-form" onSubmit={handelsubmit}>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              onChange={handleChange}
            />
          </div>

          <div className="form-group verification-group">
            <div className="password-hint-captcha">
              Hãy nhập các ký tự bên dưới
            </div>
            <div className="verification-row">
              <input
                type="text"
                name="captcha"
                placeholder="Mã xác thực"
                className="verification-input"
                onChange={handleChange}
              />
              <div className="captcha-container">
                <canvas
                  ref={canvasRef}
                  width={150}
                  height={40}
                  className="captcha-display"
                />
                <button
                  type="button"
                  className="refresh-btn"
                  onClick={drawCaptcha}
                >
                  <span className="refresh-icon">↻</span>
                </button>
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            ĐĂNG NHẬP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import "./Popup.scss";

const Popup = ({ type, onClose }) => {
  const content = {
    nhiemvu: {
      title: "NHIỆM VỤ",
      description:
        "Hoàn thành nạp thẻ cào (0/1,000,000)\nNạp thành công 1 triệu qua hình thức Thẻ Cào",
      reward: "🎁 Thưởng: 50,000 xu",
    },
    hopthu: {
      title: "HỘP THƯ",
      description: "Chưa có thư nào.",
      reward: "",
    },
  };

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={onClose}>
          ✖
        </button>
        <h2>{content[type].title}</h2>
        <p>{content[type].description}</p>
        {content[type].reward && (
          <div className="reward">{content[type].reward}</div>
        )}
      </div>
    </div>
  );
};

export default Popup;

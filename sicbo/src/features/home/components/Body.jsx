import React from "react";
import "./Body.scss";

const games = [
  { title: "RỒNG HỔ", status: "MỚI", amount: 9164239597 },
  { title: "TÀI XỈU", status: "LIVE", amount: 13209319 },
  { title: "XÓC ĐĨA", status: "CHÚC MỪNG", amount: 2106455812 },
];

const Body = () => {
  return (
    <div className="body">
      <div className="carousel">
        {games.map((game, i) => (
          <div className="game-card" key={i}>
            <div className={`badge ${game.status.toLowerCase()}`}>
              {game.status}
            </div>
            <div className="title">{game.title}</div>
            <div className="amount">₫{game.amount.toLocaleString()}</div>
          </div>
        ))}
      </div>
      <div className="user-info">
        <img
          src="https://via.placeholder.com/50"
          alt="avatar"
          className="avatar"
        />
        <div className="details">
          <div className="username">ctlpwd</div>
          <div className="balance">₫84</div>
        </div>
      </div>
    </div>
  );
};

export default Body;

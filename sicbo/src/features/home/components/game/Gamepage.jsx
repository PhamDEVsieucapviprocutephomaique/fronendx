import React, { useState, useRef } from "react";
import "./Gamepage.scss";
import "../../../../components/share/Defaultponter.scss";
import Taixiuxanh from "./taixiuxanh/Taixiuxanh";
import Taixiumd5 from "./taixiumd5/Taixiumd5";
import Taixiunhanh from "./taixiusieutoc/Taixiusieutoc";
import Capypara from "./Dapcapypara/Capypara";
import Socdia from "./socdia/Socdia";
import Daiphuquy from "./taixiudaiphuquy/Taixiudaiphuquy";
import Chimcanhcut from "./chimcanhcut/Chimcanhcut";
import Gamedaptho from "./contho/Contho";
import Vongquaysieucap from "./vongquaysieucap/Vongquaysieucap";
import Meothantai from "./Meothantai/Meothantai";
import Pharaong from "./Pharaong/Pharaong";
import Naruto from "./Quaynaruto/Naruto";
import Quayrong from "./Quayrong/Quayrong";
import Nguoilun from "./Quaynguoilun/Nguoilun";
import Livesicbo from "./Livesicbo/Livesicbo";
import Livesocdia from "./Livesocdia/Livesocdia";
import Bacarat from "./Bacarat/Bacarat";
import Keno from "./Keno/Keno";
import Lotosieutoc from "./lotonhanh/Lottosieutoc";
import Tienlen from "./Tienlen/TIenlen";
import Tienlenmiennam from "./TIenlenmienam/TIenlenmienam";
import Phom from "./phom/Phom";
import Poker from "./poker/Poker";
import Xito from "./xito/Xito";
import Ngocrong from "./7viengocrong/Ngocrong";
import Onepiece from "./onepiece/Onepiece";
import Haitac from "./Haitac/Haitac";
import Ninja from "./Ninja/Ninja";
import Acquy from "./acquy/Acquy";
import Longho from "./Longho/Longho";
const Gamepage = () => {
  const [activeSection, setActiveSection] = useState("favorite");
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const menuItems = [
    { id: "favorite", label: "All Game" },
    { id: "slot", label: "Yêu Thích" },
    { id: "card", label: "Game Bài" },
    { id: "live", label: "Slot" },
    { id: "sport", label: "Live" },
  ];

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Touch events
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="gamepage">
      <div className="gamepage-header">
        <div className="header-menu">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`menu-item ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <div className="line-left"></div>
              <div className="wrapmenulabel">
                <div className="menu-label">{item.label}</div>
              </div>
              <div className="line-right"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="gamepage-content">
        <div className="left-panel"></div>

        <div
          className="right-panel"
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="panel-item">
            <Taixiuxanh></Taixiuxanh>
          </div>
          <div className="panel-item">
            <Taixiumd5></Taixiumd5>
          </div>
          <div className="panel-item">
            <Taixiunhanh></Taixiunhanh>
          </div>
          <div className="panel-item">
            <Socdia></Socdia>
          </div>
          <div className="panel-item">
            <Daiphuquy></Daiphuquy>
          </div>
          <div className="panel-item">
            <Livesicbo></Livesicbo>
          </div>
          <div className="panel-item">
            <Livesocdia></Livesocdia>
          </div>
          <div className="panel-item">
            <Capypara></Capypara>
          </div>
          <div className="panel-item">
            <Chimcanhcut></Chimcanhcut>
          </div>
          <div className="panel-item">
            <Gamedaptho></Gamedaptho>
          </div>
          <div className="panel-item">
            <Vongquaysieucap></Vongquaysieucap>
          </div>
          <div className="panel-item">
            <Ngocrong></Ngocrong>
          </div>
          <div className="panel-item">
            <Onepiece></Onepiece>
          </div>
          <div className="panel-item">
            <Haitac></Haitac>
          </div>
          <div className="panel-item">
            <Ninja></Ninja>
          </div>
          <div className="panel-item">
            <Acquy></Acquy>
          </div>
          <div className="panel-item">
            <Longho></Longho>
          </div>

          <div className="panel-item">
            <Meothantai></Meothantai>
          </div>
          <div className="panel-item">
            <Quayrong></Quayrong>
          </div>
          <div className="panel-item">
            <Pharaong></Pharaong>
          </div>
          <div className="panel-item">
            <Nguoilun></Nguoilun>
          </div>
          <div className="panel-item">
            <Naruto></Naruto>
          </div>

          <div className="panel-item">
            <Bacarat></Bacarat>
          </div>
          <div className="panel-item">
            <Tienlen></Tienlen>
          </div>
          <div className="panel-item">
            <Tienlenmiennam></Tienlenmiennam>
          </div>
          <div className="panel-item">
            <Phom></Phom>
          </div>
          <div className="panel-item">
            <Poker></Poker>
          </div>
          <div className="panel-item">
            <Xito></Xito>
          </div>
          <div className="panel-item">
            <Lotosieutoc></Lotosieutoc>
          </div>
          <div className="panel-item">
            <Keno></Keno>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamepage;

"use client";
import React, { useState, useEffect } from "react";
import "./styles.scss";

const Anchor = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        return;
      }
      setIsVisible(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`anchor-container ${isVisible ? "visible" : ""}`}>
      <button className="anchor" onClick={handleButtonClick}>
        <span className="anchor-arrow"></span>
      </button>
    </div>
  );
};

export default Anchor;

import React from "react";
import { HiArrowRight } from "react-icons/hi";
import "./card.css";
const Button = ({ text, href, big }) => {
  return (
    <button
      className="btn-main"
      style={{
        padding: big == true ? "16px" : "4px",
        marginTop: big ? "15px" : 0,
      }}
    >
      <a
        href={href}
        target="_blank"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {text}
        {big && <HiArrowRight color="#fff" style={{ marginLeft: 10 }} />}
      </a>
    </button>
  );
};

export default Button;

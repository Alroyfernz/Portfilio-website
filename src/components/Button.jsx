import React from "react";
import "./card.css";
const Button = ({ text, href }) => {
  return (
    <button className="btn-main">
      <a href={href}>{text}</a>
    </button>
  );
};

export default Button;

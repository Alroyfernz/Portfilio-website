import React from "react";
import "./card.css";
const Button = ({ text, href }) => {
  return (
    <button className="btn-main">
      <a href={href} target="_blank">
        {text}
      </a>
    </button>
  );
};

export default Button;

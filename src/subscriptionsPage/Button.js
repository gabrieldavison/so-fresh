import React from "react";
import "./Button.css";

const Button = ({ onClick, ImageSrc }) => {
  return (
    <div className="button-K" onClick={onClick}>
      <img src={ImageSrc} alt="arrow" width="20" height="20" />
    </div>
  );
};

export default Button;

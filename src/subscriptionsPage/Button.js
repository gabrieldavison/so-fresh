import React from "react";
import "./Button.css";

const Button = ({ onClick, ImageSrc, id }) => {
  return (
    <div className="button-K" onClick={onClick} data-cy={id}>
      <img src={ImageSrc} alt="arrow" width="20" height="20" />
    </div>
  );
};

export default Button;

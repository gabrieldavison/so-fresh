import React from "react";
import "./Button.css";

const Button = ({ onClick }) => {
  return <div className="button" onClick={onClick} />;
};

export default Button;

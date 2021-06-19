import React from "react";

const Button = ({ content, color,onClick }) => {
  return (
    // <div className="button-container" >

    // </div>
    <button className="button-container" style={{ backgroundColor: color }} onClick={onClick}>{content}</button>
  );
};

export default Button;

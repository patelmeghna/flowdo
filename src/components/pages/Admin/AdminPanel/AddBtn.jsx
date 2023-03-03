import React from "react";

const AddBtn = (props) => {
  return (
    <button onClick={props.onClick} className="add-btn">
      <div className="btn-icon">{props.icon}</div>
      <p className="btn-text">{props.text}</p>
    </button>
  );
};

export default AddBtn;

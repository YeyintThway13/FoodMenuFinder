import React from "react";
import "./model.css";

const Model = ({ showState, name, category, instruction, video, photo }) => {
  const closeHandler = () => {
    showState(false);
  };
  return (
    <div className="model">
      <button className="close" onClick={closeHandler}>
        <i className="fas fa-times"></i>
      </button>
      <h2 className="name">{name}</h2>
      <h4 className="category">Category : {category}</h4>
      <img src={photo} alt="" />
      <h2>Receipe</h2>
      <p>{instruction}</p>
      <a href={video} target="_blank" rel="noreferrer">
        Go to tutorial video <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  );
};

export default Model;

import axios from "axios";
import React, { useState } from "react";
import Model from "./Model";
import "./resultCard.css";

const ResultCard = ({ id, name, thumbnail }) => {
  const [show, setShow] = useState(false);
  const [results, setResult] = useState([]);
  const namelen = name.length;

  const getHandler = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    setResult(response.data.meals);
    setShow(true);
  };

  return (
    <>
      <div className="result-card">
        <img src={thumbnail} alt="" />
        <h2>
          <span>{name[0]}</span>
          {name.slice(1, namelen - 1)}
        </h2>
        <button className="getBtn" onClick={getHandler}>
          Get Reciepe
        </button>
      </div>
      {show && results ? (
        <Model
          showState={setShow}
          name={results[0].strMeal}
          category={results[0].strCategory}
          instruction={results[0].strInstructions}
          video={results[0].strYoutube}
          photo={results[0].strMealThumb}
        ></Model>
      ) : null}
    </>
  );
};

export default ResultCard;

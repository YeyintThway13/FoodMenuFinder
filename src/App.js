import { useState } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./components/Loading";

import ResultCard from "./components/ResultCard.js";

function App() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const findHandler = async (event) => {
    if (!event.key || event.key === "Enter") {
      setResults([]);
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`
      );
      setLoading(false);
      setResults(response.data.meals);
    }
  };

  return (
    <div className="main">
      <div className="main-header-wrapper">
        <h1 className="header">
          <span>F</span>ood Menu Finder By Dora
        </h1>
        <h3>
          <i>
            "You can search food by main ingredient and you can explore how to
            make it!"
          </i>
        </h3>
      </div>
      <div className="search_wrap search_wrap_3">
        <div className="search_box">
          <input
            type="text"
            value={query}
            className="input"
            placeholder="Search meal by main ingredient"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={findHandler}
          />
          <div className="btn btn_common" onClick={findHandler}>
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <div className="results">
        {loading && <Loading></Loading>}
        {results ? (
          results.map((meal) => (
            <ResultCard
              key={meal.idMeal}
              id={meal.idMeal}
              name={meal.strMeal}
              thumbnail={meal.strMealThumb}
            ></ResultCard>
          ))
        ) : (
          <h3>No result found</h3>
        )}
      </div>
    </div>
  );
}

export default App;

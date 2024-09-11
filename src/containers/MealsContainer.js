import React, { useEffect, useState } from "react";
import MealComponent from "../components/MealComponent";
import { Link } from "react-router-dom";
import SearchBarComponent from "../components/SearchBarComponent";

const mealContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const MealsContainer = (props) => {
  // Hooks

  // store search value from input and setter for this data
  const [searchValue, setSearchValue] = useState("");

  // store meals data, and set the from fetch response
  const [data, setData] = useState([]);

  // what happens after search is updated / changed
  useEffect(
    () => fetchData(searchValue), // secondary effect from searchValue update
    [searchValue] // dependency => searchValue
  );

  // will do the fetch
  const fetchData = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setData(responseJSON));
  };

  const handleInputChange = (event) => setSearchValue(event.target.value);

  return (
    <div className="container">
      <SearchBarComponent
        searchValue={searchValue}
        handleInputChange={handleInputChange}
      />

      {/* Meals results */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.meals ? (
          data.meals.map((meal) => (
            <Link to={"/meals/" + meal.idMeal}>
              <MealComponent
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
              />
            </Link>
          ))
        ) : (
          <p className="text-center">NO DATA AVAILABLE</p>
        )}
      </div>
    </div>
  );
};

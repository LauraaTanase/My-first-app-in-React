import React from "react";
import { MealComponent } from "../components/MealComponent";

const mealContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const MealsContainer = (props) => {
  console.log(props.data);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
      {props.data
        ? props.data.map((meal) => (
            <MealComponent
              key={meal.idMeal}
              strMeal={meal.strMeal}
              strMealThumb={meal.strMealThumb}
            />
          ))
        : "NO DATA AVAILABLE"}
    </div>
  );
};

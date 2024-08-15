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
    <div style={mealContainer}>
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

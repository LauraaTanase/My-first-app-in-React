import React from "react";
import MealComponent from "../components/MealComponent";

const mealContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const MealsContainer = (props) => {
  console.log(props.data);
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {props.data
          ? props.data.map((meal) => (
              <MealComponent
                key={meal.idMeal}
                strMeal={meal.strMeal}
                strMealThumb={meal.strMealThumb}
              />
            ))
          : <p className="text-center">NO DATA AVAILABLE</p>}
      </div>
    </div>
  );
};
 export default MealsContainer
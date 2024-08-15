import React from "react";
const mealText = { backgroundColor: "white", color: "black" };

const mealTitle = { fontSize: "18px" };

const mealDescription = { fontSize: "14px", color: "gray" };

const mealCard = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  border: "1px solid gray",
  borderRadius: "10px",
};

export const MealComponent = ({ strMeal, strMealThumb }) => {
  return (
    <div className="col">
      <div className="card flex-row">
        <img
          className="rounded"
          style={{ width: "50px", height: "50px" }}
          src={strMealThumb}
        ></img>
        <div className="card-body">
          <h3 className="fs-6">{strMeal}</h3>
          <p className="card-text">Some description goes here.</p>
        </div>
      </div>
    </div>
  );
};

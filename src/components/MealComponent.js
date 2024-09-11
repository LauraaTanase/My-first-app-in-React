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

 const MealComponent = ({ strMeal, strMealThumb }) => {
  return (
    <>
      <div className="card m-2" style={{ width: '18rem' }}>
        <img src={strMealThumb} className="card-img-top"></img>
        <div className="card-body border border-3">
          <p className="card-title">{strMeal}</p>
        </div>
      </div>
    </>
  );
};
 export default MealComponent;

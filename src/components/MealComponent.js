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
    <div className="col mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={strMealThumb}
          className="card-img-top"
          alt={strMeal}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <p className="card-text">Delicious meal description goes here.</p>
        </div>
      </div>
    </div>
  );
};
 export default MealComponent;

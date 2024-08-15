import React from "react";
const mealText = { backgroundColor: "white", color:"black"};

const mealTitle = {fontSize :"18px"};

const mealDescription = {fontSize:"14px" , color:"gray"};

const mealCard = {
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    gap:"10px",
    border:"1px solid gray",
    borderRadius:"10px",
};

export const MealComponent = ({ strMeal, strMealThumb }) => {
  return (
    <div style={mealCard}>
    <img width="50" height="50" src={strMealThumb}></img>
<div style = {mealText}>
      <h3>{strMeal}</h3>
      <p style={mealDescription}>Some description goes here.</p>
      </div>
    </div>
  );
};

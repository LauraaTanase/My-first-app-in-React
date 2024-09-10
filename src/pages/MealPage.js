import React from "react";
import { useParams } from "react-router-dom";

export default function MealPage() {
  const { idMeal } = useParams();
  return (
    <div>
      <h1>MealPage</h1>
      <p>Clicked on: {idMeal}</p>
    </div>
  );
}

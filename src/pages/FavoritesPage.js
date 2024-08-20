import React, { useEffect, useState } from "react";
import FavoriteMealsContainer from "../containers/FavoriteMealsContainer";

const FavoritesPage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const storedMeals = localStorage.getItem("favoriteMeals");
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
    }
  }, []);

  return (
    <div>
      <FavoriteMealsContainer data={meals} />
    </div>
  );
};
export default FavoritesPage;

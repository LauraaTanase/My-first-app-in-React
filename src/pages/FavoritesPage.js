import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import FavoriteMealsContainer from "../containers/FavoriteMealsContainer"
import { useEffect, useState } from "react";

const FavoritesPage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Recuperează datele din localStorage
    const storedMeals = localStorage.getItem("favoriteMeals");
    if (storedMeals) {
      // Convertește datele JSON într-un obiect JavaScript
      setMeals(JSON.parse(storedMeals));
    }
  }, []); // Array-ul gol înseamnă că acest efect se va rula o singură dată

  return (
    <div>
      <h1>Your Favorite Meals</h1>
      <MealsContainer data={meals} />{" "}
      {/* Transmite datele către MealsContainer */}
      <FavoriteMealsContainer/>
    </div>
  );
};

export default FavoritesPage;

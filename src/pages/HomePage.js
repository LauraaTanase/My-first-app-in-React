import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import { mockMeals } from "../assets/mockData";

export default HomePage

function HomePage() {
  return (
  <div>
      <div>HomePage component loaded</div>
      <MealsContainer data={mockMeals.meals}/>
      </div>
  )
}
//TODO DE COMPLETAT AICI DIN INREGISTRAREA VIDEO!!!!!//
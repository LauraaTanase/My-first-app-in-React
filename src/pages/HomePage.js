import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import { mockMeals } from "../assets/mockData";
import TopbarContainer from "../containers/TopbarContainer";
import SidebarContainer from "../containers/SidebarContainer";
export default HomePage;

function HomePage() {
  return (
    <div className="container-fluid">
      <TopbarContainer />
      <div className="d-flex">
        <SidebarContainer />
        <MealsContainer data={mockMeals.meals} />
      </div>
    </div>
  );
}
//TODO DE COMPLETAT AICI DIN INREGISTRAREA VIDEO!!!!!//

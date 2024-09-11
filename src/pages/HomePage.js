import React from "react";
import { MealsContainer } from "../containers/MealsContainer";
import TopbarContainer from "../containers/TopbarContainer";
import SidebarContainer from "../containers/SidebarContainer";

export default function HomePage() {
  return (
    <div className="container-fluid">
      <TopbarContainer />
      <div className="d-flex">
        <SidebarContainer/>
        <MealsContainer/>
      </div>
    </div>
  );
}

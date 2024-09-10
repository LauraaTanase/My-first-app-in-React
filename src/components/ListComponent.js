import React from "react";
import SideAreaComponent from "../components/SideAreaComponent";
import SidebarComponent from "../components/SidebarComponent";

const ListComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <SideAreaComponent />
        </div>
        <div className="col-md-9 col-lg-10">
          <SidebarComponent />
        </div>
      </div>
    </div>
  );
};

export default ListComponent;

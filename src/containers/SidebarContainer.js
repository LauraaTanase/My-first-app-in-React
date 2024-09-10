import React from "react";
import SidebarComponent from "../components/SidebarComponent";
import SideAreaComponent from "../components/SideAreaComponent";
import { Link } from "react-router-dom"; // Adaugă acest import
import ListComponent from "../components/ListComponent";

export default function () {
  return (
    <div>
      <Link
        to="/favorites"
        className="btn bg-white text-start border-bottom text-dark fw-bold px-0 rounded-0"
      >
        ♡ Favorites
      </Link>
      <div className="d-flex flex-md-column m-0 p-0">
      <ListComponent/>
      </div>
    </div>
  );
}

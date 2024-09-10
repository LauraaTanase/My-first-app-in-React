import React, { useEffect, useState } from "react";
import { MealsContainer } from "../containers/MealsContainer";
import TopbarContainer from "../containers/TopbarContainer";
import SidebarContainer from "../containers/SidebarContainer";

export default function HomePage() {
  const searchValue = 'beef';
  const [data, setData] = useState([]);

  const fetchData = (searchValue) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => response.json())
      .then((responseJSON) => setData(responseJSON));
  };

  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid">
      <TopbarContainer />
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <SidebarContainer />
        </div>
        <div className="col-md-9 col-lg-10">
          <MealsContainer data={data.meals} />
        </div>
      </div>
    </div>
  );
}

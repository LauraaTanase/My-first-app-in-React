import React from "react";
import MealComponent from "../components/MealComponent";

const FavoriteMealsContainer = ({ data }) => {
  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Your Bookmarked Meals!</h1>
        <div className="col-lg-12 mx-auto">
          {data && data.length > 0 ? (
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {data.map((meal) => (
                <div className="col" key={meal.idMeal}>
                  <MealComponent
                    title={meal.strMeal}
                    imageSRC={meal.strMealThumb}
                    id={meal.idMeal}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning fs-4">
              No favorite meals available. Start bookmarking your favorites!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavoriteMealsContainer;

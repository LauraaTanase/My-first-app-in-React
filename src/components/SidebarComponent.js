import React from "react";

const SidebarComponent = () => {
  const meals = [
    { strCategory: "Beef" },
    { strCategory: "Breakfast" },
    { strCategory: "Chicken" },
    { strCategory: "Dessert" },
    { strCategory: "Goat" },
    { strCategory: "Lamb" },
    { strCategory: "Miscellaneous" },
    { strCategory: "Pasta" },
    { strCategory: "Pork" },
    { strCategory: "Seafood" },
    { strCategory: "Side" },
    { strCategory: "Starter" },
    { strCategory: "Vegan" },
    { strCategory: "Vegetarian" },
  ];

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light">
      <div className="dropdown">
        <a
          className="dropdown-toggle btn btn-light"
          href="#"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Categories
        </a>
        <ul
          className="dropdown-menu w-100"
          aria-labelledby="dropdownMenuButton"
        >
          {meals.map((meal, index) => (
            <li key={index}>
              <a
                className="dropdown-item d-flex justify-content-between align-items-center"
                href="#"
              >
                {meal.strCategory}
                <span className="badge bg-secondary">12</span>{" "}
               
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;

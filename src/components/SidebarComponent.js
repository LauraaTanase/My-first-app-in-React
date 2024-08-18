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
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: '250px' }}
    >
      <div className="dropdown">
        <a
          className="dropdown-toggle btn btn-light"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ boxShadow: 'none' }} // Elimină umbrele, dacă sunt prezente
        >
          Categories
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{ boxShadow: 'none', border: 'none' }}>
          {meals.map((meal, index) => (
            <li key={index}>
              <a className="dropdown-item" href="#" style={{ padding: '0.5rem 1rem', background: 'none' }}>
                {meal.strCategory}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SidebarComponent;

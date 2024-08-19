import React from "react";

const SideAreaComponent = () => {
  const meals = [
    { strArea: "American" },
    { strArea: "British" },
    { strArea: "Canadian" },
    { strArea: "Chinese" },
    { strArea: "Croatian" },
    { strArea: "Dutch" },
    { strArea: "Egyptian" },
    { strArea: "Filipino" },
    { strArea: "French" },
    { strArea: "Greek" },
    { strArea: "Indian" },
    { strArea: "Irish" },
    { strArea: "Italian" },
    { strArea: "Jamaican" },
    { strArea: "Japanese" },
    { strArea: "Kenyan" },
    { strArea: "Malaysian" },
    { strArea: "Mexican" },
    { strArea: "Moroccan" },
    { strArea: "Polish" },
    { strArea: "Portuguese" },
    { strArea: "Russian" },
    { strArea: "Spanish" },
    { strArea: "Thai" },
    { strArea: "Tunisian" },
    { strArea: "Turkish" },
    { strArea: "Ukrainian" },
    { strArea: "Unknown" },
    { strArea: "Vietnamese" },
  ];

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: "250px" }}
    >
      <div className="dropdown">
        <a
          className="dropdown-toggle btn btn-light"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ boxShadow: "none" }} // Elimină umbrele, dacă sunt prezente
        >
          Areas
        </a>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuLink"
          style={{ boxShadow: "none", border: "none" }}
        >
          {meals.map((meal, index) => (
            <li key={index}>
              <a
                className="dropdown-item"
                href="#"
                style={{ padding: "0.5rem 1rem", background: "none" }}
              >
                {meal.strArea}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SideAreaComponent;

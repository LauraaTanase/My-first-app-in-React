import React, { useEffect, useState } from "react";
import FavoriteMealsContainer from "../containers/FavoriteMealsContainer";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const storedMeals = localStorage.getItem("favoriteMeals");
    if (storedMeals) {
      setMeals(JSON.parse(storedMeals));
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            My Favorite Meals
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favorites
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow-1">
        <div className="container my-5">
          <FavoriteMealsContainer data={meals} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light py-3 mt-auto">
        <div className="container text-center">
          <span className="text-muted">
            © 2024 My Favorite Meals. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default FavoritesPage;

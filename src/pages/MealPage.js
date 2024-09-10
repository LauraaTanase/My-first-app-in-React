import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function MealPage() {
  const { idMeal } = useParams();

  return (
    <div className="d-flex flex-column min-vh-100">
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

     
      <main className="flex-grow-1">
        <div className="container py-5">
          <h1 className="display-4 text-center">Meal Details</h1>
          <p className="lead text-center">Meal ID: {idMeal}</p>

          <div className="row justify-content-center mt-5">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Meal Title Here</h5>
                  <p className="card-text">
                    Add more details about the meal, including ingredients,
                    preparation, etc.
                  </p>
                  <Link
                    to="/favorites"
                    className="btn btn-light border border-secondary rounded-3 shadow-sm d-inline-block px-3 py-2 custom-width"
                  >
                    <i className="bi bi-heart me-2"></i> Add to Favorites
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
      <footer className="bg-light py-3 mt-auto">
        <div className="container text-center">
          <span className="text-muted">
            © 2024 My Favorite Meals. All rights reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

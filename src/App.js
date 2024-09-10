import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/App.css";
import MealComponent from "./components/MealComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import PageNotFound from "./pages/PageNotFound";
import MealPage from "./pages/MealPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<HomePage />} />
        <Route path="/meals/:idMeal" element={<MealPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

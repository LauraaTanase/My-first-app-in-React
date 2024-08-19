import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/App.css";
import MealComponent from "./components/MealComponent";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SidebarContainer from "./containers/SidebarContainer";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Router>
      {/* De obicei, sidebar-ul și header-ul ar fi în afara Routes */}
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

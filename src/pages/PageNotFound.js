import React from 'react'
import { Link } from "react-router-dom";


const PageNotFound = () => {
    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">Sorry, the page you’re looking for doesn’t exist.</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    );
  };
  


export default PageNotFound
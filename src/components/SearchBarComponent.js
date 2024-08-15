import React from "react";

export default function SearchBarComponent() {
  return (
    <div className="container-fluid d-flex gap-3 align-items-center p-2">
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-body-emphasis text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          LOGO
        </a>
      </div>

      <div className="d-flex ms-auto w-50 align-items-center">
        <input
          type="search"
          className="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </div>
    </div>
  );
}

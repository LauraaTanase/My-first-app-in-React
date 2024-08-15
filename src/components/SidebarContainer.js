import React from "react";

export default function () {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            Orders
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            Products
          </a>
        </li>
        <li>
          <a href="#" class="nav-link link-body-emphasis">
            Customers
          </a>
        </li>
      </ul>
      <div class="dropdown">
        <ul class="dropdown-menu text-small shadow">
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

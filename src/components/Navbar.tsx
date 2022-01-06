import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper px1">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Список</NavLink>
        </li>
        <li>
          <NavLink to="/about">Інформація</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper px1">
      <a href="/" className="brand-logo">
        React + Typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <a href="/">Список</a>
        </li>
        <li>
          <a href="/">Інформація</a>
        </li>
      </ul>
    </div>
  </nav>
);

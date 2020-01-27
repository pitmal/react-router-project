import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Nav.css";
const navigationItems = [
  {
    id: 1,
    path: "/",
    exact: true,
    name: "Home"
  },
  {
    id: 2,
    path: "/oferta",
    name: "Oferta"
  },
  {
    id: 3,
    path: "/realizacje",
    name: "Realizacje"
  },
  {
    id: 4,
    path: "/kontakt",
    name: "Kontakt"
  }
];

const Nav = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const nav = navigationItems.map(item => (
    <NavLink
      key={item.id}
      to={item.path}
      exact={item.exact ? item.exact : null}
    >
      {item.name}
    </NavLink>
  ));
  return (
    <>
      <nav className="main-nav">
        <ul>{nav}</ul>
      </nav>
      <nav className={`burger-nav ${activeBurger ? "active" : ""}`}>
        <div
          className={`burger ${activeBurger ? "active" : ""}`}
          onClick={() => setActiveBurger(!activeBurger)}
        >
          <span className="first-span"></span>
          <span className="second-span"></span>
          <span className="third-span"></span>
        </div>

        <ul>{nav}</ul>
      </nav>
    </>
  );
};
export default Nav;

import React from "react";
import { NavLink } from "react-router-dom";
import logoImg from "../../images/logo-mallabs-dark.png";
import "../../styles/Logo.css";
const Logo = () => {
  return (
    <div class="logo-wrapper">
      <NavLink to="/">
        <img src={logoImg} alt="mallabs-logo" />
      </NavLink>
    </div>
  );
};
export default Logo;

import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import "../../styles/Header.css";
const Header = props => {
  const fixed = props.fixed ? props.fixed : "";
  const active = props.active ? props.active : "";

  return (
    <>
      <header>
        <div className={`header-wrapper ${fixed} ${active}`}>
          {<Logo />}
          {<Nav />}
        </div>
      </header>
    </>
  );
};
export default Header;

import React from "react";
import imgResponsive from "../../../images/projekt-strony-responsywnej-lub-serwisu-internetowego.jpg";
import "../../../styles/TitleRespoonsive.css";
const TitleResponsive = () => {
  return (
    <div
      className="responsive-website"
      style={{ backgroundImage: `url(${imgResponsive})` }}
    >
      <div className="h1wrapper">
        <h1 className="offers">Projekt strony responsywnej</h1>
        <p className="offersAlt">aplikacji lub serwisu internetowego</p>
      </div>
    </div>
  );
};
export default TitleResponsive;

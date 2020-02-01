import React from "react";
import imgMarketing from "../../../images/dlugofalowa-strategia-marketingu-internetowego.jpg";
import "../../../styles/TitleMarketing.css";
const TitleMarketing = () => {
  return (
    <div
      className="marketing-website"
      style={{ backgroundImage: `url(${imgMarketing})` }}
    >
      <div className="h1wrapper">
        <h1 className="offers">Długofalowa strategia</h1>
        <p className="offersAlt">marketingu internetowego</p>
      </div>
    </div>
  );
};
export default TitleMarketing;

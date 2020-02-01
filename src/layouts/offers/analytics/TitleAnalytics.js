import React from "react";
import imgAnalytics from "../../../images/certyfkowana-znajamosc-narzedzi-analityki-internetowej.jpg";
import "../../../styles/TitleAnalytics.css";
const TitleAnalytics = () => {
  return (
    <div
      className="analytics-website"
      style={{ backgroundImage: `url(${imgAnalytics})` }}
    >
      <div className="h1wrapper">
        <h1 className="offers">Certyfikowana znajomość </h1>
        <p className="offersAlt">narzędzi analityki internetowej</p>
      </div>
    </div>
  );
};
export default TitleAnalytics;

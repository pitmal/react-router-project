import React from "react";
import "../../../styles/TitleAnalytics.css";

const TitleAnalytics = ({ active }) => {
  return (
    <>
      <div className="h1wrapper">
        <h1 className={`offers ${active}`}> Certyfikowana znajomość</h1>
        <p className={`offersAlt ${active}`}>narzędzi analityki internetowej</p>
      </div>
    </>
  );
};
export default TitleAnalytics;

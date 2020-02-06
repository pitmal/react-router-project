import React from "react";
import "../../../styles/TitleMarketing.css";
const TitleMarketing = ({ active }) => {
  return (
    <>
      <div className="h1wrapper">
        <h1 className={`offers ${active}`}>Długofalowa strategia</h1>
        <p className={`offersAlt ${active}`}>marketingu internetowego</p>
      </div>
    </>
  );
};
export default TitleMarketing;

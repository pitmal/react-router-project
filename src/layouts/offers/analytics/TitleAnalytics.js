import React, { useRef } from "react";
import imgAnalytics from "../../../images/certyfkowana-znajamosc-narzedzi-analityki-internetowej.jpg";
import checkOffset from "../../../components/CheckOffset";
import "../../../styles/TitleAnalytics.css";

const TitleAnalytics = ({ scroll }) => {
  const titleAnalyticsRef = useRef();
  const h1Title = useRef();

  const active = checkOffset(titleAnalyticsRef, scroll);

  return (
    <div
      className="analytics-website"
      style={{ backgroundImage: `url(${imgAnalytics})` }}
      ref={titleAnalyticsRef}
    >
      <div className="h1wrapper">
        <h1 className={`offers ${active}`} ref={h1Title}>
          Certyfikowana znajomość{" "}
        </h1>
        <p className={`offersAlt ${active}`}>narzędzi analityki internetowej</p>
      </div>
    </div>
  );
};
export default TitleAnalytics;

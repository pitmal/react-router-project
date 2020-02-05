import React, { useRef } from "react";
import imgMarketing from "../../../images/dlugofalowa-strategia-marketingu-internetowego.jpg";
import checkOffset from "../../../components/CheckOffset";
import "../../../styles/TitleMarketing.css";
const TitleMarketing = ({ scroll }) => {
  const titleMarketingRef = useRef();
  const active = checkOffset(titleMarketingRef, scroll);
  return (
    <div
      className="marketing-website"
      style={{ backgroundImage: `url(${imgMarketing})` }}
      ref={titleMarketingRef}
    >
      <div className="h1wrapper">
        <h1 className={`offers ${active}`}>Długofalowa strategia</h1>
        <p className={`offersAlt ${active}`}>marketingu internetowego</p>
      </div>
    </div>
  );
};
export default TitleMarketing;

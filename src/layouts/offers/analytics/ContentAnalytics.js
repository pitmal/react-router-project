import React from "react";
import Pentagon from "../../../components/Pentagon";
import "../../../styles/ContentAnalytics.css";
const ContentAnalytics = ({ active }) => {
  return (
    <>
      <h2 className="offers-title-analytics">
        Podpięta analityka to potwierdzenie skutecznych działań
      </h2>
      <p className="offers-text-analytics">
        Posiadane <strong>kwalifikacje indwywidualne Googla</strong> to
        gwarancja poprawnych umiejętność niezbędnych do śledzenia ruchu w twojej
        aplikacji, optymalizacji treści, zwiększenia organicznych zasięgów –
        budowania rozpoznawalność twojej marki.
      </p>
      <Pentagon
        key="darkGrey"
        color="45,46,45,0.8"
        name={`darkGrey-ofers ${active}`}
      />
      <Pentagon
        key="darkGrey2"
        color="45,46,45,0.8"
        name={`darkGrey-ofers2 ${active}`}
      />
      <Pentagon
        key="darkGrey3"
        color="45,46,45,0.8"
        name={`darkGrey-ofers3 ${active}`}
      />
    </>
  );
};
export default ContentAnalytics;

import React from "react";
import Pentagon from "../../../components/Pentagon";
import "../../../styles/ContentMarketing.css";
const ContentMarketing = ({ active }) => {
  return (
    <>
      <h2 className="offers-title-marketing">
        Świadomie zbudujemy wiarygodność twojej marki{" "}
      </h2>
      <p className="offers-text-marketing">
        Marketing internetowy odgrywa ogromna rolę w procesie poznawania
        marki,ustawienie odpowiednio zoptymalizowanej kampanii reklamowej obniży
        koszty pozyskania klienta a przemyślane określenie grup docelowych
        korzystnie wpłynie na zwrot z inwestycji.Stworzymy dla ciebie{" "}
        <strong>
          kampanie CPC, poprowadzimy Sociale, przeprowadzimy audyt SEO
        </strong>
      </p>
      <Pentagon
        key="dirtBlue"
        color="60,74,110,0.8"
        name={`dirtBlue-ofers ${active}`}
      />
      <Pentagon
        key="dirtBlue2"
        color="60,74,110,0.8"
        name={`dirtBlue-ofers2 ${active}`}
      />
      <Pentagon
        key="dirtBlue3"
        color="60,74,110,0.8"
        name={`dirtBlue-ofers3 ${active}`}
      />
    </>
  );
};
export default ContentMarketing;

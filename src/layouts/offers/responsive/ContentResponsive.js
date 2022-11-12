import React from "react";
import Pentagon from "../../../components/Pentagon";
import "../../../styles/ContentResponsive.css";
const ContentResponsive = ({ active }) => {
  return (
    <>
      <h2 className="offers-title">
        Zaprojektujemy dla Ciebie w pełni responsywną stronę internetową{" "}
      </h2>
      <p className="offers-text">
        Strony internetowe stały się skutecznym narzędziem marketingowym, które
        docenia coraz więcej firm. Brak obecności w Sieci może znacznie utrudnić
        rozpoznawalność marki oraz dotarcie do nowych klientów. Dobrze
        zaprojektowana witryna internetowa wpłynie na sukces Twojej
        firmy.Proponujemy skorzystać z bardzo funkcjonalnego rozwiązania, jakim
        jest{" "}
        <strong>
          aplikacja internetowa lub responsywna strona internetowa.
        </strong>
      </p>
      <Pentagon
        key="green"
        color="297, 135, 60,0.8"
        name={`green-ofers ${active}`}
      />
      <Pentagon
        key="green2"
        color="297, 135, 60,0.8"
        name={`green-ofers2 ${active}`}
      />
      <Pentagon
        key="green3"
        color="297, 135, 60,0.8"
        name={`green-ofers3 ${active}`}
      />
    </>
  );
};
export default ContentResponsive;

import React, { useRef } from "react";
import Pentagon from "../../../components/Pentagon";
import checkOffset from "../../../components/CheckOffset";
import "../../../styles/ContentMarketing.css";
const ContentMarketing = ({ scroll }) => {
  const contentMarketingRef = useRef();
  const active = checkOffset(contentMarketingRef, scroll);

  return (
    <div className="marketing-section" ref={contentMarketingRef}>
      <h2 className="offers-title">
        Zaprojektujemy dla Ciebie w pełni responsywną stronę internetową{" "}
      </h2>
      <p className="offers-text-marketing">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
        gravida dolor, consectetur bibendum velit. Maecenas quis eros viverra,
        fringilla velit vel, blandit massa. Curabitur a viverra nisi, id
        fringilla tortor. Phasellus ac velit auctor lectus consectetur ornare
        tincidunt quis ligula. Sed in metus elit. Suspendisse ac convallis erat,
        non pellentesque orci. Donec ullamcorper a sapien ut malesuada.
        Suspendisse congue erat vitae lacus commodo, eget rhoncus nulla
        tincidunt. Sed a odio vestibulum nisl gravida rutrum. Pellentesque eget
        dapibus lacus, eget volutpat lorem.
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
    </div>
  );
};
export default ContentMarketing;

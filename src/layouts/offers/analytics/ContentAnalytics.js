import React from "react";
import Pentagon from "../../../components/Pentagon";
import "../../../styles/ContentAnalytics.css";
const ContentAnalytics = () => {
  return (
    <div className="analytics-section">
      <h2 className="offers-title-analytics">
        Zaprojektujemy dla Ciebie w pełni responsywną stronę internetową{" "}
      </h2>
      <p className="offers-text-analytics">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
        gravida dolor, consectetur bibendum velit. Maecenas quis eros viverra,
        fringilla velit vel, blandit massa. Curabitur a viverra nisi, id
        fringilla tortor. Phasellus ac velit auctor lectus consectetur ornare
        tincidunt quis ligula. Sed in metus elit. Suspendisse ac convallis erat,
        non pellentesque orci. Donec ullamcorper a sapien ut malesuada.
        Suspendisse congue erat vitae lacus commodo, eget rhoncus nulla
        tincidunt. Sed a odio vestibulum nisl gravida rutrum. Pellentesque eget
        dapibus lacus, eget volutpat lor
      </p>
      <Pentagon key="darkGrey" color="45,46,45,0.8" name="darkGrey-ofers" />
      <Pentagon key="darkGrey2" color="45,46,45,0.8" name="darkGrey-ofers2" />
      <Pentagon key="darkGrey3" color="45,46,45,0.8" name="darkGrey-ofers3" />
    </div>
  );
};
export default ContentAnalytics;

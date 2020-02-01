import React from "react";
import Header from "../common/Header";
import TitleResponsive from "./responsive/TitleResponsive";
import ContentResponsive from "./responsive/ContentResponsive";
import TitleMarketing from "./strategy/TitleMarketing";
import ContentMarketing from "./strategy/ContentMarketing";
import TitleAnalytics from "./analytics/TitleAnalytics";
import ContentAnalytics from "./analytics/ContentAnalytics";
const OffersLayout = () => {
  return (
    <>
      <Header />
      <TitleResponsive />
      <ContentResponsive />
      <TitleMarketing />
      <ContentMarketing />
      <TitleAnalytics />
      <ContentAnalytics />
    </>
  );
};
export default OffersLayout;

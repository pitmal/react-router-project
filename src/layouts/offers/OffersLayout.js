import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import TitleResponsive from "./responsive/TitleResponsive";
import ContentResponsive from "./responsive/ContentResponsive";
import TitleMarketing from "./strategy/TitleMarketing";
import ContentMarketing from "./strategy/ContentMarketing";
import TitleAnalytics from "./analytics/TitleAnalytics";
import ContentAnalytics from "./analytics/ContentAnalytics";
const OffersLayout = () => {
  const [scrollPosition, setScrollPosition] = useState({ scroll: 0 });
  const handleScroll = e => setScrollPosition({ scroll: window.scrollY });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <TitleResponsive />
      <ContentResponsive scroll={scrollPosition.scroll} />
      <TitleMarketing scroll={scrollPosition.scroll} />
      <ContentMarketing scroll={scrollPosition.scroll} />
      <TitleAnalytics scroll={scrollPosition.scroll} />
      <ContentAnalytics scroll={scrollPosition.scroll} />
    </>
  );
};
export default OffersLayout;

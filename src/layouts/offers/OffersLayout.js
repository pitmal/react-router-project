import React, { useState, useEffect, useRef } from "react";
import imgMarketing from "../../images/dlugofalowa-strategia-marketingu-internetowego.jpg";
import imgAnalytics from "../../images/certyfkowana-znajamosc-narzedzi-analityki-internetowej.jpg";
import Footer from "../common/Footer";
import TitleResponsive from "./responsive/TitleResponsive";
import ContentResponsive from "./responsive/ContentResponsive";
import TitleMarketing from "./strategy/TitleMarketing";
import ContentMarketing from "./strategy/ContentMarketing";
import TitleAnalytics from "./analytics/TitleAnalytics";
import ContentAnalytics from "./analytics/ContentAnalytics";
import checkOffset from "../../components/CheckOffset";
const OffersLayout = () => {
  // --------- ContentResponsive  init----------
  const [contentReponsiveActive, setContentResponsive] = useState("");
  const contentResponsiveRef = useRef();
  // ------------ TitleMarketing  init----------
  const [titleMarketingActive, setTitleMarketing] = useState("");
  const titleMarketingRef = useRef();
  // ------------ ContentMarketing init----------
  const [contentMarketingActive, setContentMarketing] = useState("");
  const contentMarketingRef = useRef();
  // ------------ TitleAnalytic init----------
  const [titleAnalyticActive, setTitleAnalytic] = useState("");
  const titleAnalyticsRef = useRef();

  //  ------------ ContentAnalytic init----------
  const [contentAnalyticActive, setContentAnalytic] = useState("");
  const contentAnalyticsRef = useRef();

  // ----------scroll init-----------
  let scroll;
  const handleScroll = () => {
    scroll = window.scrollY;
    // --------- ContentResponsive offsetTop ----------
    const activeContentResponsive = checkOffset(contentResponsiveRef, scroll);
    if (activeContentResponsive) {
      setContentResponsive("active");
    } else {
      setContentResponsive("");
    }
    // ------------ TitleMarketing offsetTop----------
    const activeTitleMarketing = checkOffset(titleMarketingRef, scroll);
    if (activeTitleMarketing) {
      setTitleMarketing("active");
    }
    //  else {
    //   setTitleMarketing("");
    // }
    // ------------ ContentMarketing offsetTop----------
    const contentMarketingActive = checkOffset(contentMarketingRef, scroll);
    if (contentMarketingActive) {
      setContentMarketing("active");
    } else {
      setContentMarketing("");
    }
    // ------------ TitleAnalytic offsetTop----------
    const titleAnalyticActive = checkOffset(titleAnalyticsRef, scroll);
    if (titleAnalyticActive) {
      setTitleAnalytic("active");
    }
    //  else {
    //   setTitleAnalytic("");
    // }
    //  ------------ ContentAnalytic offsetTop----------
    const contentAnalyticActive = checkOffset(contentAnalyticsRef, scroll);
    if (contentAnalyticActive) {
      setContentAnalytic("active");
    } else {
      setContentAnalytic("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <TitleResponsive />
      <div className="responsive-section" ref={contentResponsiveRef}>
        <ContentResponsive active={contentReponsiveActive} />
      </div>
      <div
        className="marketing-website"
        style={{ backgroundImage: `url(${imgMarketing})` }}
        ref={titleMarketingRef}
      >
        <TitleMarketing active={titleMarketingActive} />
      </div>
      <div className="marketing-section" ref={contentMarketingRef}>
        <ContentMarketing active={contentMarketingActive} />
      </div>
      <div
        className="analytics-website"
        style={{ backgroundImage: `url(${imgAnalytics})` }}
        ref={titleAnalyticsRef}
      >
        <TitleAnalytics active={titleAnalyticActive} />
      </div>
      <div className="analytics-section" ref={contentAnalyticsRef}>
        <ContentAnalytics active={contentAnalyticActive} />
      </div>
      <Footer />
    </>
  );
};
export default OffersLayout;

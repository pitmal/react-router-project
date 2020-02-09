import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Cenniczek from "./Cenniczek";

const RealizationsLayout = () => {
  const [fixedNav, setFixedNav] = useState("");
  const [fixedNavActive, setFixedNavActive] = useState("");
  let scroll;

  const handleScroll = () => {
    scroll = window.scrollY;
    if (scroll > window.outerHeight * 0.15) {
      setFixedNav("fixed");
      if (scroll > window.outerHeight * 0.2) {
        setFixedNavActive("active");
      }
    } else {
      setFixedNav("");
      setFixedNavActive("");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <Header fixed={fixedNav} active={fixedNavActive} />
      <Cenniczek />
      <Footer />
    </>
  );
};
export default RealizationsLayout;

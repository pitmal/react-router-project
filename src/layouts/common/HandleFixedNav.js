import { useState, useEffect } from "react";
const HandelFixedNav = () => {
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
  return { fixedNav, fixedNavActive };
};
export default HandelFixedNav;

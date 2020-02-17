import React from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Cenniczek from "./Cenniczek";
import HandelFixedNav from "../common/HandleFixedNav";

const RealizationsLayout = () => {
  const { fixedNav, fixedNavActive } = HandelFixedNav();
  return (
    <>
      <Header fixed={fixedNav} active={fixedNavActive} />
      <Cenniczek />
      <Footer />
    </>
  );
};
export default RealizationsLayout;

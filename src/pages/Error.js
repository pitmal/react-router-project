import React from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/common/Header";
import Footer from "../layouts/common/Footer";
import HandelFixedNav from "../layouts/common/HandleFixedNav";
import "../styles/ErrorPage.css";
const Error = () => {
  const { fixedNav, fixedNavActive } = HandelFixedNav();
  return (
    <>
      <Header fixed={fixedNav} active={fixedNavActive} />
      <section className="error-wrapper">
        <h3>
          Upss! Chyba coś poszło nie tak ! Zachodzę w głowę co ? ( Błąd 404 )
        </h3>
        <h4>
          Tymczasem zapraszam na <Link to="/">stronę główną</Link>
        </h4>
        <section className="walking"></section>
      </section>

      <Footer />
    </>
  );
};
export default Error;

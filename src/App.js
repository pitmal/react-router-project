import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import MainPage from "./pages/MainPage";
import Offers from "./pages/Offers";
import Realizations from "./pages/Realizations";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Header from "./layouts/common/Header";
import HandelFixedNav from "./layouts/common/HandleFixedNav";

function App() {
  // --------------- Fixed Nav init
  const { fixedNav, fixedNavActive } = HandelFixedNav();

  return (
    <>
      <Router>
        <Header fixed={fixedNav} active={fixedNavActive} />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/oferta" component={Offers} />
          <Route path="/realizacje" component={Realizations} />
          <Route path="/kontakt" component={Contact} />
          <Route path="/" component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

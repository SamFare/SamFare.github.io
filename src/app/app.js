import React from "react";
import Nav from "../Nav/Nav.js";
import AboutPage from "../AboutPage/AboutPage.js";
import Footer from "../Footer/Footer.js";

import navConfig from "../../data/config/config.json";
export default class App extends React.Component{
  render(){
    return (
      <div>
        <Nav logo={navConfig.logo} options={navConfig.options}></Nav>
        <AboutPage />
        <Footer />
      </div>
    );
  }
}


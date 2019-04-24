import React from "react";
import ReactDOM from "react-dom";
import Nav from "../Nav/Nav.js";
import AboutPage from "../AboutPage/AboutPage.js";
import Footer from "../Footer/Footer.js";

import navConfig from "../../data/config/config.json";
class App extends React.Component{
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

ReactDOM.render(<App />, document.getElementById("react"));

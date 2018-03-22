import React from "react";
import ReactDOM from "react-dom";
import TitleBar from "../TitleBar/titleBar.js";
import AboutPage from "../AboutPage/AboutPage.js";
import SkillPage from "../SkillPage/SkillPage.js";

class App extends React.Component{
  render(){
    return (
      <div>
        <TitleBar />
        <AboutPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));

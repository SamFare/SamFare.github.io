import React from "react";
import ReactDOM from "react-dom";
import TitleBar from "../TitleBar/titleBar.js";
import NavigationBar from "../NavigationBar/NavigationBar.js";

class App extends React.Component{
  render(){
    return (
      <div>
        <TitleBar />
        <NavigationBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("react"));

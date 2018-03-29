import React from "react";

import css from "./Footer.css";

export default class Footer extends React.Component {
  render(){
    return (
      <div className={css.footer}>
        <div> Dont forget to follow me:</div>
        <div>
          <a href="https://github.com/SamFare">
            <img className={css.footerImgLink} src="../assets/GitHub-Mark-64px.png"/>
          </a>
          <a href="https://medium.com/@samuel.fare">
            <img className={css.footerImgLink} src="../assets/Monogram.png"/>
          </a>
        </div>
        <div>Copyright &copy; Samuel Fare</div>       
      </div>
    );
  }
}
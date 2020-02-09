import React from "react";
import PropTypes from "prop-types";
import css from "./Nav.css";

const buildOptionMenu = (options) => { 
  return (<ul className={css.menu}>
    {
      options.map(option => (
        <li key={option.key} className={`${css.navButton} qa-option`}>
          <a href={option.link} className={`${css.navLink}`}>{option.value}</a>
        </li>)
      )
    }
  </ul> );
};

const Nav = (props) => { 
  return(
    <div className={`${css.nav} qa-nav`}>
      { props.logo? <img src={props.logo} className={`${css.logo} qa-logo`}></img> : <noscript />}
      {buildOptionMenu(props.options)}
    </div>
  );
};

Nav.propTypes = { 
  options: PropTypes.array.isRequired,
  logo: PropTypes.string
};

export default Nav;
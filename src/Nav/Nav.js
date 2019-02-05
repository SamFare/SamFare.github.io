import React from "react";
import PropTypes from "prop-types";
import css from "./Nav.css";


const Nav = (props) => { 
  return(
    <ul className={`${css.nav} qa-nav`}>
      {
        props.options.map(option => { 
          return <li key={option.key} className={`${css.navButton} qa-option`}>{option.value}</li>;
        })
      } 
    </ul>
  );
};

Nav.propTypes = { 
  options: PropTypes.array.isRequired
};

export default Nav;
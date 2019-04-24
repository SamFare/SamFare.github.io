import React from "react";
import PropTypes from "prop-types";
import css from "./Nav.css";


const Nav = (props) => { 
  return(
    <div className={`${css.nav} qa-nav`}>
      {
        props.logo? <img src={props.logo} className={`${css.logo} qa-logo`}></img> : <noscript />
        
      }
      <ul className={css.menu}>
        {
          props.options.map(option => { 
            return <li key={option.key} className={`${css.navButton} qa-option`}>{option.value}</li>;
          })
        }
      </ul> 
    </div>
  );
};

Nav.propTypes = { 
  options: PropTypes.array.isRequired,
  logo: PropTypes.string
};

export default Nav;
import React from "react";
import PropTypes from "prop-types";

import css from "./PhotoHeader.css";

export default class PhotoHeader extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      imgUrlToDisplay: ""
    };
  }

  getImage() { 
    window.innerWidth > 600
      ? this.setState({imgUrlToDisplay: `url(${this.props.imgUrl})`})
      : this.setState({imgUrlToDisplay: `url(${this.props.mobileImgUrl})`});
  }

  componentDidMount() {
    this.getImage();
    window.addEventListener("resize", this.getImage.bind(this));
  }

  static get propTypes() {
    return {
      text: PropTypes.string, 
      imgUrl: PropTypes.string.isRequired, 
      mobileImgUrl: PropTypes.string.isRequired,
    };  
  }

  render(){
    return (
      <div style={{"backgroundImage": this.state.imgUrlToDisplay}} className={`${css.photoHeader} qa-photo`}>
        <div className={css.bottomRight}>{this.props.text}</div>
      </div> 
    );
  }
}
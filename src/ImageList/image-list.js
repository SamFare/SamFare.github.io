import React from "react";
import PropTypes from "prop-types";
import css from "./imageList.css";

const ImageList = (props) => { 
  return(
    <div className={css.listContainer}>
      {
        props.images.map((img, index) => { 
          return <img className={css.listItem} src={img.url} key={index} /> ;
        })
      }
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageList;
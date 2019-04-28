import React from "react";
import PropTypes from "prop-types";

const ImageList = (props) => { 
  return(
    <div>
      {
        props.images.map((img, index) => { 
          return <img src={img.url} key={index} /> ;
        })
      }
    </div>
  );
};

ImageList.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageList;
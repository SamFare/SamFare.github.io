import React from "react";
import PropTypes from "prop-types";
import TextElement from "../TextElement/TextElement.js";
import InvertedTextElement from "../TextElement/InvertedTextElement.js";

export default class ListOfTextElement extends React.Component{
  
  constructor(props) {
    super(props);
    const { elements } = this.props;
    this.listItems = this.generateElements(elements); 
    this.generateElements = this.generateElements.bind(this);
  }

  static get propTypes() { 
    return {
      elements: PropTypes.array,
    };
  }

  generateElements(elementJson) {
    let index = 0;
    let elementAsJsx = []; 
    
    for(let element of elementJson) {
      if(index % 2) {
        elementAsJsx.push(<InvertedTextElement key={index} img={element.img}/>);
      } else {
        elementAsJsx.push(<TextElement key={index} />);
      }
      ++index;
    }

    return elementAsJsx;
  }

  render(){
    return (
      <div>
        {this.listItems}
      </div>
    );
  } 
}

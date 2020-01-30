import React from "react";
import ReactDOM from "react-dom";

class ColorLabel extends React.Component {
  render() {
    var heading = document.querySelector("#colorHeading");
    return ReactDOM.createPortal(": " + this.props.color, heading);
  }
}

export default ColorLabel;

import React from "react";

class LetterTwo extends React.Component {
  render() {
    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center"
    };
    return <div style={letterStyle}>{this.props.children}</div>;
  }
}

export default LetterTwo;

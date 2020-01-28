import React from "react";
import LightningCounter from "./LightningCounter";

class LightningCounterDisplay extends React.Component {
  render() {
    var commonStyle = {
      margin: 0,
      padding: 0
    };

    var divStyle = {
      width: 250,
      textAlign: "center",
      backgroundColor: "#020202",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999999",
      borderRadius: 10
    };

    var textStyles = {
      emphasis: {
        fontSize: 38,
        ...commonStyle
      },
      smallEmphasis: {
        ...commonStyle
      },
      small: {
        fontSize: 17,
        opacity: 0.5,
        ...commonStyle
      }
    };

    return (
      <div style={divStyle}>
        <LightningCounter />
        <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
        <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
        <p style={textStyles.small}>(since you loaded this example)</p>
      </div>
    );
  }
}

export default LightningCounterDisplay;

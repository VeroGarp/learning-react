import React from "react";

class Label extends React.Component {
  render() {
    var labelStyle = {
      fontFamily: "sans-serif",
      fontWeight: "bold",
      padding: 13,
      margin: 0
    };

    return <p style={labelStyle}>#FF6663</p>;
  }
}

export default Label;

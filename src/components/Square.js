import React from "react";

class Square extends React.Component {
  render() {
    var squareStyle = {
      height: 150,
      backgroundColor: "#FF6663"
    };

    return <div style={squareStyle}></div>;
  }
}

export default Square;

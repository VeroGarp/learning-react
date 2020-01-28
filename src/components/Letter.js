import React from "react";

class Letter extends React.Component {
  render() {
    return <div className="letter">{this.props.children}</div>;
  }
}

export default Letter;

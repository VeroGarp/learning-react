import React from "react";
import "./App.css";
import Circle from "./components/Circle";

function App() {
  function showCircle() {
    var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    var ran = Math.floor(Math.random() * colors.length);

    // return a Circle with a randomly chosen color
    return <Circle bgColor={colors[ran]} />;
  }

  return (
    <div>
      {showCircle()}
      {showCircle()}
      {showCircle()}
    </div>
  );
}

export default App;

import React from "react";
// import Buttonify from "../src/components/Buttonify";
import Letter from "../src/components/Letter";
import LetterTwo from "../src/components/LetterTwo";
import Card from "../src/components/Card";
import "./App.css";

function App() {
  return (
      <div>
      <div>
        <Letter>A</Letter>
        <Letter>E</Letter>
        <Letter>I</Letter>
        <Letter>O</Letter>
        <Letter>U</Letter>
      </div>
      <div>
        <LetterTwo bgcolor="#58B3FF">A</LetterTwo>
        <LetterTwo bgcolor="#FF605F">E</LetterTwo>
        <LetterTwo bgcolor="#FFD52E">I</LetterTwo>
        <LetterTwo bgcolor="#49DD8E">O</LetterTwo>
        <LetterTwo bgcolor="#AE99FF">U</LetterTwo>
      </div>
    </div>
  );
}

export default App;

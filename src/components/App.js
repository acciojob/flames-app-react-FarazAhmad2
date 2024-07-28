import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [relationship, setRelationship] = useState("");

  const calculateRelationship = () => {
    if (input1.trim() === "" || input2.trim() === "") {
      setRelationship("Please Enter valid input");
      return;
    }

    let s1 = input1;
    let s2 = input2;

    for (const char of input1) {
      if (input2.includes(char)) {
        s1 = s1.replace(char,'')
        s2 = s2.replace(char,'')
      }
    }

    console.log(s1);
    console.log(s2);

    const remainingLength = s1.length + s2.length;
    const sum = Math.floor(remainingLength % 6);
    const flames = [
      "Siblings",
        "Friends",
        "Love",
        "Affection",
        "Marriage",
        "Enemy",
    ];
    setRelationship(flames[sum]);
  };

  const clearInputs = () => {
    setInput1("");
    setInput2("");
    setRelationship("");
  };

  return (
    <div id="main">
      <input
        type="text"
        data-testid="input1"
        name="name1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        data-testid="input2"
        name="name2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={clearInputs}>
        Clear
      </button>
      <h3 data-testid="answer"> {relationship}</h3>
    </div>
  );
};

export default App;

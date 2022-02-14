import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  let toUpperCase = () => {
    let n = text.toUpperCase();
    setText(n);
  };

  let toLowerCase = () => {
    setText(text.toLowerCase());
  };

  let change = (event) => {
    setText(event.target.value);
  };

  let wordCount = (text) => {
    let count = 0,
      f = 1;
    for (let x of text) {
      if (x !== " " && f === 1) {
        f = 0;
        count++;
      } else if (x !== " ") f = 0;
      else f = 1;
    }
    return count;
  };
  return (
    <>
      <div className="container">
        <h1 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Enter the Text
        </h1>
        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            id="exampleFormControlTextarea1"
            rows="12"
            value={text}
            onChange={change}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={toUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLowerCase}>
          Convert to Lowercase
        </button>
        <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Your text summary
        </h2>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Total words:{wordCount(text)}
        </p>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Total characters:{text.length}
        </p>
        <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Preview
        </h2>
        <div className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          {text}
        </div>
      </div>
    </>
  );
}

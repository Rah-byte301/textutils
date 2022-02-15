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
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={toUpperCase}
          disabled={text.length === 0}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={toLowerCase}
          disabled={text.length === 0}
        >
          Convert to Lowercase
        </button>
        <h2 className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Your text summary
        </h2>
        <p className={`text-${props.mode === "dark" ? "light" : "dark"}`}>
          Total words:{text.split(/\s+/).filter((x) => x.length).length}
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

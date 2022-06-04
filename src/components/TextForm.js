import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Changed to UpperCase", "info");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Changed to LowerCase", "info");
  };

  const handleCapitalizeClick = () => {
    let newText = text.split(" ");
    let capital = "";
    newText.forEach((element) => {
      capital +=
        element.slice(0, 1).toUpperCase() +
        element.substring(1).toLowerCase() +
        " ";
    });
    setText(capital.slice(0, -1));
    props.showAlert("Each word Capitalized", "info");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "warning");
  };

  const handleRemoveExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "info");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (someText) => {
    someText = someText.replace(/(\r\n|\n|\r)/gm, "").trim();
    const wordArray = someText.split(" ");
    let count = 0;
    for (let i of wordArray) {
      if (i === " " || i === "") continue;
      else count++;
    }
    return count;
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: props.mode === "light" ? "black" : "white",
          }}
          id="myBox"
          rows="10"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          To UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLowClick}>
          To LowerCase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleCapitalizeClick}
        >
          Capitalize
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-danger my-2 mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="my-3">
        <h2>Your Text Summary</h2>
        <p>
          {countWords(text)} Words and {text.length} Characters
        </p>
        <p>
          Time to read this text is {text.split(" ").length * 0.008} minutes
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "<--Preview your text here-->"}</p>
      </div>
    </>
  );
}

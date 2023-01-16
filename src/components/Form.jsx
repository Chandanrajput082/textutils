import React, { useState } from "react";

export default function Form(propes) {
  function toUpper() {
    let upText = text.toUpperCase();
    setText(upText);
    propes.showAlert("Convert in UpperCase", "success");

  }

  function toLower() {
    let upText = text.toLowerCase();
    setText(upText);
    propes.showAlert("Convert in LowerCase", "success");

  }
  function toClear() {
    let upText = "";
    setText(upText);
    propes.showAlert("Successfully Clear", "success");

  }
  function handleClick(e) {
    setText(e.target.value);
  }
  const handleCopy = () => {
    var myText = document.getElementById("mybox");
    myText.select();
    navigator.clipboard
      .writeText(myText.value)
      propes.showAlert("Successfully copy", "success");

  };
  const removeExtraSpace = () => {
    var myText = document.getElementById("mybox");
    myText.select();

    console.log(myText, "yexy");
    const sentence = myText.value.replace(/\s+/g, " ");
    setText(sentence);
    propes.showAlert("Successfully remove Extra Space", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: propes.mode == "dark" ? "white" : "black" }}
      >
        <h1>{propes.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            rows="8"
            onChange={handleClick}
            style={{ backgroundColor: propes.mode == "dark" ? "grey" : "white" }}
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={toUpper}
        >
          ToUpperCase
        </button>
        <button type="button" className="btn btn-primary" onClick={toLower}>
          ToLowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={toClear}
        >
          clear
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleCopy}
        >
          copy
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={removeExtraSpace}
        >
          RemoveExtraSpace
        </button>
        <div className="container my-3">
          <h3>text Summary</h3>
          <p>
            {text.split(" ").length - 1} words , {text.length} character
          </p>
        </div>
      </div>
    </>
  );
}

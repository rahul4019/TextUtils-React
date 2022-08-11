import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Transformed to uppercase!", "success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Transformed to lowercase!", "success");
  };

  const handleClearText = () => {
    setText("");
    props.showAlert("Cleared text!", "success");
  };

  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#505050" : "white" }}
      >
        <h1>{props.heading}</h1>
        <div className="form-floating">
          <textarea
            className="form-control my-3 p-2"
            placeholder="Leave a comment here"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              height: "200px",
              backgroundColor: props.mode === "light" ? "white" : "#505050",
              color: props.mode === "light" ? "#505050" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
      </div>

      <hr />

      <div
        className="container my-4"
        style={{ color: props.mode === "light" ? "#505050" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters.{" "}
        </p>
        <p>{0.008 * text.split(" ").length} minutes read.</p>

        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter text in text Box to preview."}</p>
      </div>
    </>
  );
}

import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😂": "laughing",
  "😚": "kissing",
  "😠": "angry",
  "🙂": "smiling",
  "😞": "disappointed",
  "😭": "crying",
  "🤔": "thinking",
  "🤥": "lying",
  "😪": "sleepy",
  "😟": "worried"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    // if (meaning === undefined) {
    //   meaning = "we don't have this in our database";
    // }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    console.log(emoji);
  }
  return (
    <div className="App">
      <h1>Inside out</h1>

      <input onChange={emojiInputHandler}></input>

      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}

      <h2>{meaning}</h2>
    </div>
  );
}

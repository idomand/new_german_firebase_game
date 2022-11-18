import React, { useState } from "react";
import "./AddNewWord.scss";
// import "./App.css";

export default function AddNewWord() {
  const [wordG, setWordG] = useState("");
  const [wordE, setWordE] = useState("");
  //   const [wordG, setWordG] = useState("");
  //   const [wordG, setWordG] = useState("");

  return (
    <div className="AddNewWordWrapper">
      <h2>add new word</h2>
      <form>
        <input
          placeholder="word in german"
          type="text"
          required
          value={wordG}
          onChange={(e) => {
            setWordG(e.target.value);
          }}
        />
        <input
          placeholder="ploral in german"
          type="text"
          required
          value={wordG}
          onChange={(e) => {
            setWordG(e.target.value);
          }}
        />
        <input
          placeholder="word in english"
          type="text"
          required
          value={wordE}
          onChange={(e) => {
            setWordE(e.target.value);
          }}
        />

        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

import React, { useState } from "react";
import "./AddNewWord.scss";
import { addNewWord } from "../lib/firebase-ido";
export default function AddNewWord() {
  const [wordG, setWordG] = useState("");
  const [wordE, setWordE] = useState("");
  const [plural, setPlural] = useState("");
  const [Artikel, setArtikel] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addNewWord(wordE, Artikel, wordG, plural);
    setWordG("");
    setWordE("");
    setPlural("");
    setArtikel("");
  }

  return (
    <div className="AddNewWordWrapper">
      <form onSubmit={handleSubmit}>
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
          placeholder="word in english"
          type="text"
          required
          value={wordE}
          onChange={(e) => {
            setWordE(e.target.value);
          }}
        />
        <input
          placeholder="plural in german"
          type="text"
          required
          value={plural}
          onChange={(e) => {
            setPlural(e.target.value);
          }}
        />
        <select
          value={Artikel}
          onChange={(e) => {
            setArtikel(e.target.value);
          }}
        >
          <option value="Der">Der</option>
          <option value="Die">Die</option>
          <option value="Das">Das</option>
        </select>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

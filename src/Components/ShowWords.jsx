import React, { useState } from "react";
import { getAllData } from "../lib/firebase-ido";
import "./ShowWords.scss";
export default function ShowWords() {
  const [myState, setMyState] = useState([]);

  async function getAllWords() {
    setMyState(await getAllData());
  }

  return (
    <>
      <button onClick={getAllWords}>get words</button>

      <section className="word-grid">
        {myState.map((word) => {
          return (
            <div className="word-card" key={word.wordE}>
              <p>English: {word.wordE}</p>
              <p>
                German: {word.artikel} {word.wordG}
              </p>
              <p>Plural: {word.plural}</p>
            </div>
          );
        })}
      </section>
    </>
  );
}

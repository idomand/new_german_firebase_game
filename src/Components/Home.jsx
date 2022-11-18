import React, { useState } from "react";
import AddNewWord from "./AddNewWord";
import { getAllData } from "../lib/firebase-ido";
export default function Home() {
  const [myState, setMyState] = useState([]);

  async function getAllWords() {
    setMyState(await getAllData());
  }

  return (
    <>
      <AddNewWord />
      <p>this is the new app -- 2.0</p>

      <button onClick={getAllWords}>get words</button>

      {myState.map((word) => {
        return (
          <div key={word.wordE}>
            <h1>{word.wordE}</h1>
          </div>
        );
      })}
    </>
  );
}

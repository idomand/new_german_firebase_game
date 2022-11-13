import React, { useEffect, useState } from "react";
import { getAllData } from "../lib/firebase-ido";
export default function Home() {
  const [myState, setMyState] = useState([]);

  useEffect(() => {
    foo();
  }, []);

  async function foo() {
    setMyState(await getAllData());
  }

  return (
    <>
      <p>this is the new app</p>
      {myState.map((word) => {
        return (
          <div>
            <h1>{word.wordE}</h1>
          </div>
        );
      })}
    </>
  );
}

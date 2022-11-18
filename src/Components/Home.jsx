import React, { useState } from "react";
import AddNewWord from "./AddNewWord";
import "./Home.scss";
import Navbar from "./Navbar";
import PlayArtikelGame from "./PlayArtikelGame";
import ShowWords from "./ShowWords";

export default function Home() {
  const [section, setSection] = useState("PlayArtikelGame");

  return (
    <main className="main-home">
      <Navbar section={section} setSection={setSection} />
      <h1>{section}</h1>
      {section === "ShowWords" && <ShowWords />}
      {section === "AddNewWord" && <AddNewWord />}
      {section === "PlayArtikelGame" && <PlayArtikelGame />}
    </main>
  );
}

import React from "react";
import "./Navbar.scss";
export default function Navbar({ section, setSection }) {
  function pickSection(sectionPicked) {
    setSection(sectionPicked);
  }

  return (
    <section className="navbar-wrapper">
      <button
        className={`${section}` === "ShowWords" ? "active" : "not-active"}
        onClick={() => pickSection("ShowWords")}
        disabled={`${section}` === "ShowWords"}
      >
        showWords
      </button>
      <button
        disabled={`${section}` === "AddNewWord"}
        className={`${section}` === "AddNewWord" ? "active" : "not-active"}
        onClick={() => pickSection("AddNewWord")}
      >
        add new word
      </button>
      <button
        className={`${section}` === "PlayArtikelGame" ? "active" : "not-active"}
        onClick={() => pickSection("PlayArtikelGame")}
        disabled={`${section}` === "PlayArtikelGame"}
      >
        play game
      </button>
    </section>
  );
}

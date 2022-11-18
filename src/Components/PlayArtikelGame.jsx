import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { getAllData } from "../lib/firebase-ido";
import "./PlayArtikelGame.scss";
import QuestionCard from "./QuestionCard";

export default function PlayArtikelGame() {
  const [allWords, setAllWords] = useState([]);
  const [isGameOver, setIsGameOver] = useState(true);
  const [numberOfQuestions, setNumberOfQuestions] = useState(3);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questionsArray, setQuestionsArray] = useState({});
  const [question, setQuestion] = useState({});

  useEffect(() => {
    getAllWords();
  }, []);
  async function getAllWords() {
    setAllWords(await getAllData());
  }
  function startNewGame() {
    setScore(0);
  }

  async function startGameFunc(event) {
    event.preventDefault();
    setIsGameOver(false);
    setScore(0);
    setQuestionNumber(0);

    let firstQ = await getQuestions();
    nextStage(firstQ);
  }

  function nextStage(firstQ) {
    console.log("firstQ :>> ", firstQ);
    setQuestion(firstQ);
  }

  async function getQuestions() {
    // let randomNumber = Math.floor(Math.random() * 1000);
    let randomNumber = 0;

    let newArray = [];
    for (let i = randomNumber; i < randomNumber + numberOfQuestions; i++) {
      newArray.push(allWords[i]);
    }
    setQuestionsArray(newArray);
    let firstQ = newArray[1];
    return firstQ;
  }

  function getNextQuestion() {
    if (questionNumber + 1 === numberOfQuestions) {
      setIsGameOver(true);
    } else {
      setQuestionNumber((prv) => prv + 1);
      setQuestion(questionsArray[questionNumber]);
    }
  }
  function updateScore(userAnswer) {
    if (userAnswer === "right") {
      setScore((prv) => prv + 1);
    }
  }

  if (isGameOver && score === 0) {
    return (
      <section className="preGameScreen">
        <form onSubmit={startGameFunc}>
          <label htmlFor="numberOfQuestions">
            Pick Number Of Questions:
            <input
              id="umberOfQuestions"
              min={0}
              max={20}
              type="number"
              value={numberOfQuestions}
              onChange={(e) => {
                setNumberOfQuestions(+e.target.value);
              }}
            />
          </label>
          <button disabled={!numberOfQuestions}>start Game</button>
        </form>
      </section>
    );
  } else if (isGameOver && score > 0) {
    return (
      <div>
        <h1>game over</h1>
        <h5>your score is {score}</h5>

        <p>Would You Like To Play Again?</p>
        <button onClick={startNewGame}>New Game</button>
      </div>
    );
  } else {
    return (
      <section>
        <div className="score">
          <div>Score: {score}</div>
          <div>
            Question: {questionNumber + 1} /{numberOfQuestions}
          </div>
        </div>

        {!isGameOver && question && questionNumber < numberOfQuestions && (
          <QuestionCard
            getNextQuestion={getNextQuestion}
            updateScore={updateScore}
            Artikel={question.Artikel}
            Meaning={question.Meaning}
            Plural={question.Plural}
            word={question.word}
          />
        )}
      </section>
    );
  }
}

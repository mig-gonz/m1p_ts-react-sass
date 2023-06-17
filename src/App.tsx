import React, { useState } from "react";
import "./App.css";
import win from "./images/win.png";
import questions from "./questions";

// Define the type for an answer
type Answer = {
  text: string;
  correct?: boolean;
};

function App() {
  // manages our questions array and is set to -1 to not display any.
  // Once clicked its updated to 0 to display the first question.
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);

  // manages/tracks our score
  const [score, setScore] = useState(0);

  // state to control showing the result
  const [showResult, setShowResult] = useState(false);

  // Get the current question based on the current question index
  const currentQuestion = questions[currentQuestionIndex];

  // handles the background colors of the correct and wrong answers
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(-1);
  const [incorrectAnswerIndex, setIncorrectAnswerIndex] = useState(-1);

  // Handle start button click event
  const handleStartClick = () => {
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setScore(0);
  };

  // Handle answer button click event
  const handleButtonClick = (answer: Answer, answerIndex: number) => {
    // Check if the answer has a defined correct value
    if (answer.correct !== undefined) {
      handleAnswerClick(answer.correct);
    }

    if (answer.correct === true) {
      setCorrectAnswerIndex(answerIndex);
    } else {
      setIncorrectAnswerIndex(answerIndex);
    }
  };

  // Handle next button click event
  const handleNextClick = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    setCorrectAnswerIndex(-1);
    setIncorrectAnswerIndex(-1);
  };

  // Handle answer button click event
  const handleAnswerClick = (correct: boolean) => {
    // Update the score if the answer is correct
    if (correct) {
      setScore(score + 100);
    }

    setCorrectAnswerIndex(-1);
    setIncorrectAnswerIndex(-1);
  };

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">♦ Bid to Win! ♦</h1>
      </header>

      <main className="main-content">
        <img
          className="image"
          src={currentQuestion?.image || win}
          alt="winner"
        />

        {/*if currentQuestion exists, render the current question and answer options */}
        {currentQuestion && (
          <>
            <h4 className="question">{currentQuestion.question}</h4>
            <div className="buttons">
              {currentQuestion.answers.map((answer, index) => (
                <button
                  key={index}
                  className={`question-btn ${
                    index === correctAnswerIndex ? "correct" : ""
                  } ${index === incorrectAnswerIndex ? "wrong" : ""}`}
                  onClick={() => handleButtonClick(answer, index)}
                  disabled={showResult}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </>
        )}

        {/* renders score */}

        {currentQuestion && (
          <p className="score">
            score: <span className="points">{score}</span>
          </p>
        )}

        {/* if showResult is true then display you win, else you lost is displayed. */}
        {showResult && (
          <p className="animation-win">
            {score >= 700 ? "Winner!" : "Sorry, you lost."}
          </p>
        )}

        {/* Render the game introduction */}
        {currentQuestionIndex === -1 && (
          <>
            <h2 className="sub-header">
              Bid to Win, inspired by "The Price Is Right"
            </h2>
            <p className="para-text">
              <span className="underline">Bid to Win</span>: an online browser
              game where you have to guess the price of each shown item. Getting
              the answer correct will earn you 100 points. You have to reach a
              total score of 700 points to win. Good luck!
            </p>

            {/* start button */}
            <button className="start-btn" onClick={handleStartClick}>
              Start Game
            </button>
          </>
        )}

        {/* Display the "Next" button if a question is shown and the game result is not yet revealed */}
        {currentQuestionIndex > -1 && !showResult && (
          <button className="next-btn" onClick={handleNextClick}>
            Next
          </button>
        )}
      </main>
    </div>
  );
}

export default App;

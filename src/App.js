import React, { useState } from "react";
import Timer from "./Timer";

export default function App() {
  const questions = [
    {
      questionText: "Commonly used data types DO NOT include:?",
      answerOptions: [
        { answerText: "strings", isCorrect: false },
        { answerText: "booleans", isCorrect: false },
        { answerText: "alerts", isCorrect: true },
        { answerText: "number", isCorrect: false },
      ],
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      answerOptions: [
        { answerText: "numbers and strings", isCorrect: false },
        { answerText: " other arrays", isCorrect: false },
        { answerText: " booleans", isCorrect: false },
        { answerText: "all of the above", isCorrect: true },
      ],
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      answerOptions: [
        { answerText: "commas", isCorrect: false },
        { answerText: "curly brackets", isCorrect: false },
        { answerText: "quotes", isCorrect: true },
        { answerText: "parentheses", isCorrect: false },
      ],
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answerOptions: [
        { answerText: "JavaScript", isCorrect: false },
        { answerText: "terminal/bash", isCorrect: false },
        { answerText: " for loops", isCorrect: false },
        { answerText: "console.log", isCorrect: true },
      ],
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      answerOptions: [
        { answerText: "break", isCorrect: true },
        { answerText: "stop", isCorrect: false },
        { answerText: "halt", isCorrect: false },
        { answerText: "exit", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(50);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetStateClick = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setRecordedScore(score);
    setSeconds(0);
  };
  const [recordedScore, setRecordedScore] = useState(0);
  return (
    <div>
      <div>
        <ul>
          <li style={{ paddingTop: "10px", fontSize: "20px" }}>
            <a class="active">View highscores</a>
          </li>

          <li style={{ float: "right" }}>
            <a>
              <Timer></Timer>
            </a>
          </li>
        </ul>
      </div>

      <div className="app container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
            <button onClick={resetStateClick}>Retry</button>
            <div>
              <p>Your Last Score: {recordedScore}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

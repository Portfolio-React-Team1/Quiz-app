import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import QuizPagination from "../../Components/Pagination/QuizPagination";
import Timer from "../../Components/Timer/Timer";
const Quizpage = () => {
  // const [QuestionBank, setQuestionBank] = useState();
  const [currentPage, setcurrentPage] = useState(1);
  const [QuestionPerPage] = useState(1);
  const [selectedOption, setselectedOption] = useState("");

  const QuestionBank = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: [
        "1. commas",
        "2. curly brackets",
        "3. quotes",
        "4. parentheses",
      ],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];

  sessionStorage.setItem("QuestionBank", JSON.stringify(QuestionBank));

  const Answers = [
    "3. alerts",
    "4. all of the above",
    "3. quotes",
    "4. console.log",
    "1. break",
  ];

  const indexOfLastQuestion = currentPage * QuestionPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - QuestionPerPage;
  const QuestionBanks = JSON.parse(sessionStorage.getItem("QuestionBank"));
  const currentQuestion = QuestionBanks.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  // Change Page
  const paginate = (pageNumber) => setcurrentPage(pageNumber);

  // const QuestionBanks = JSON.parse(sessionStorage.getItem("QuestionBank"));

  for (var i = 0; i < Answers.length; i++) {
    // choosenAnswer = Answers[i];
    if (Answers[i] === selectedOption) {
      alert("Correct!");
    }
  }

  return (
    <div>
      <Timer></Timer>
      {currentQuestion.map((questionSet) => (
        <Card
          style={{
            width: "60vw",
            // height: '80vh',
            backgroundColor: "white",
            padding: "1em 2em 0em 2em",
            marginLeft: "10rem",
            marginTop: "1.5em",
            display: "flex",
            justifyContent: "flex-start",
            border: "2px solid lightgrey",
            borderRadius: "20px",
            boxShadow: "7px 7px 7px lightgrey",
          }}
        >
          <Card.Body style={{ width: "100%" }}>
            <Card.Title
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0em 0em 0em 0em",
                color: "#00000",
                fontFamily: "verdana",
                fontSize: "1.8rem",
                fontStyle: "normal",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              {questionSet.questionText}
            </Card.Title>
            <ListGroup style={{ width: "100%", padding: "0em 0em 0em 0em" }}>
              {questionSet.options.map((option) => (
                // const handleClick = (e) => {
                //   setselectedOption(e.target.value);
                //   console.log(selectedOption);
                //   console.log(Answers)
                // }
                <div>
                  <ListGroup.Item
                    style={{
                      width: "97.75%",
                      backgroundColor: "#218380",
                      borderRadius: "7px",
                      padding: "1em 0em 1em 1em",
                      color: "white",
                      fontSize: "1.1rem",
                      margin: "0.5em 0 0.5em 0",
                      textAlign: "left",
                    }}
                    onClick={(e) => setselectedOption(option)}
                    value={selectedOption}
                  >
                    {option}
                  </ListGroup.Item>
                </div>
              ))}
            </ListGroup>
            <hr></hr>
            <br />
            <QuizPagination
              questionperpage={QuestionPerPage}
              totalquestion={5}
              paginate={paginate}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Quizpage;

import React from "react";
import "./home.css";
import Nav from "../../Components/Nav/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="box">
          <h1>Coding Quiz Challenge</h1>
          <p>
            Try to answer the following code related questions within the time
            limit
          </p>
          <p>
            Keep in mind that wrong anwers will penalize your score/time by 10
            sec
          </p>
          <div className="nav">
            <button onClick={() => navigate("/Quizpage")}>Start Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

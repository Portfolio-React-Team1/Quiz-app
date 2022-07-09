import React from "react";
import "./home.css";
import Nav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";

function Home() {
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
          <button type="button" className="btn customnav">
            <Link to="/Quizpage">Start Quiz </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

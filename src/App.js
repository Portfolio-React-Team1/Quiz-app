import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Alldone from "./pages/Alldone/Alldone";
import Highscores from "./pages/Highscores/Highscores";
import Quizpage from "./pages/QuizPage/Quizpage";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Quizpage" element={<Quizpage />} />
          <Route path="Alldone" element={<Alldone />} />
          <Route path="/Highscores" element={<Highscores />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

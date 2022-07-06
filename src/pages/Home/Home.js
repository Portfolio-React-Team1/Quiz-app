import React from 'react'
import Timer from '../../Components/Timer/Timer'
import Alldone from '../Alldone/Alldone'
import Highscores from '../Highscores/Highscores'
import Quizpage from '../QuizPage/Quizpage'

const Home = () => {
  return (
    <div>
      <Timer/>
      <Quizpage/>
      <Alldone/>
      <Highscores/>
    </div>
  )
}

export default Home
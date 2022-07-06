import React from 'react'
import './Highscores.css'

const Highscores = () => {
  // To get details of scores from localStorage 
  // const [scores, setScores] = useState([])

  // useEffect(() => {
  //   const scores = JSON.parse(localStorage.getItem('scores'));
  
  //   if (scores) {
  //     setScores(scores);
  //   }
  // }, [])

  // To delete the scores
  const clearScores = () => {
    localStorage.removeItem('scores')
  }

  return (
    <div className='main'>
      <div className='box'>
        <div className='text'>
          <h2>Highscores</h2>
          {/* To display the scores  */}
          {/* <p><span>{scoreDetails.index}</span>. <span>{scoreDetails.initials}</span> - <span>{scoreDetails.score}</span></p> */}
          {/* Sample  */}
          <p>1. CD - 9</p>
        </div>
        <div className='buttons'>
          <button>Go back</button>
          <button onClick={clearScores}>Clear Highscores</button>
        </div>
      </div>
    </div>
  )
}

export default Highscores
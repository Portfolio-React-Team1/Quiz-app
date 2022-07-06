import React,{useState,useEffect} from 'react';
import './timer.css';

const Timer = () => {
  const [seconds,setSeconds] = useState(50);

 var timer;
useEffect(()=>{
  timer =setInterval(()=>{
     setSeconds(seconds -1)
     if(seconds === 0 ){
        setSeconds(0)
        }
        
       },1000)

         return ()=> clearInterval(timer);

       })

  return (
    <>
    <header>
      <span>view highscores</span>
      <span className='timer'>Time: {seconds < 10 ? '0'+seconds : seconds}</span>
      </header></>
   
     )
}


export default Timer
import React from 'react'
import './alldone.css'

const Alldone = () => {
  return (
    <div className='alldone'>
      <div className='alldone-details'>
        <div className='alldone-h1'><h1>All done!</h1></div>
        <div alldone-h><h4>Your final score is <span>9.</span></h4></div>
        <div className='alldone-form'>
          <form>
            <label for name='text' >Enter initials:</label>
            <input name='text' type='text' required></input>
            <input type='submit' name='submit'></input>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Alldone
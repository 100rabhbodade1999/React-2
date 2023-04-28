import React, { useState } from 'react';
import './NumberGuess.css'

export function NumberGuess() {

    const[count, setCount] = useState("")
    const[checkNumber, setCheckNumber] = useState("")

    function NumberChange(event){
        setCount(event.target.value)
    }

    function CheckNumber(event){
        setCheckNumber(event.target.value)
  
         
    const num = 5
    if(num == number){
        return (<p>congratulations you guessed right number in {count} attempts</p>);
    }
    else if (num > number){
        alert('You guessed bigger number')
    }
    else if (num < number){
        alert('You guessed smaller number')
    }
    }


  return (
    <div className='card'>
    <h1>Guess the correct Number</h1> <br/>
      <input
      className='inp'
      placeholder='Guess lucky number..'
      onChange={NumberChange}
      type='number'
      /> <br/>

      <button className='btn' onClick={CheckNumber}>Match Number</button>
    </div>
  )
}

export default NumberGuess

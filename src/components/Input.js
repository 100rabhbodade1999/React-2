import React, { useState } from 'react';
import './Input.css';

function Input() {

  const[inputValue, setInputValue] = useState('');
  const[outputValue, setOutputvalue] = useState('');


    const handleClick = () => {
      setOutputvalue('Hi my name is:',{outputValue});
      setInputValue(inputValue);
    }

    const handleInputChange = (event) => (
      setInputValue(event.target.value)
    )


  return (
    <div id='inp'>
      <input
      placeholder='Add your name..'
      onChange= {handleInputChange}
      />  
      
      <button onClick={handleClick}>Submit</button>

      <p>Hi my name is ***</p>

    
    </div>
  );
}

export default Input;

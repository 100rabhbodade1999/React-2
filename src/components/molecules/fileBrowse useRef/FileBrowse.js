import React, { useRef } from 'react';
import './FileBrowse.css';

function FileBrowse() {

  let inputRef = useRef(null);

  function handleClick(){
    inputRef.current.click();
  }


  return (
    <div className='Browse'>
      <input
      type='file'
      ref={inputRef}
      /> <br/><br/>
      <button onClick={handleClick}>Pick the file</button>
    </div>
  )
}

export default FileBrowse;

import React, { useRef, useState } from 'react'

export default function wordCounter() {
  const [charLength, setCharLength] = useState(0);
  const [wordLength, setWordLength] = useState(0);

  const textRef = useRef();
  
  function handleChange(){
    const value = textRef.current.value;
    setCharLength(value.length);
    value.length ? setWordLength(value.trim().split(" ").length) : setWordLength(0);
  }
  function handleClick(){
    textRef.current.value = "";
    handleChange();
  }
  return (
    <section className='counter'>
      <textarea onChange={handleChange} ref={textRef} placeholder='Type or paste your text here'></textarea>
      <button onClick={handleClick} data-testid="clear-btn" disabled={charLength? "":"disabled"}>Clear</button>
      <div className='result'>
        <span data-testid="charLength">Character length : {charLength}</span>
        <span data-testid="wordLength">Word length : {wordLength}</span>
      </div>
    </section>
  )
}

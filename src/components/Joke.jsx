import React, { useEffect, useState } from 'react'

export default function Joke() {
  const [joke, setJoke] = useState("");

  useEffect(()=>{
    async function FetchJoke(){
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setJoke(data.value);
    }
    FetchJoke();
  },[])
  return (
    <section className='joke'>
      <p>
        <span data-testid="joke-headline">{joke}</span>
        <span>- api.chucknorris.io</span>
      </p>
    </section>
  )
}

import React from 'react'
import Header from '../components/Header'
import Joke from '../components/joke'

export default function JokePage() {
  return (
    <>
      <Header/>
      <section className="header">
        <h1 data-testid="heading" >Free Jokes</h1>
        <p data-testid="subHeading">Free JSON API for hand curated Chuck Norris facts</p>
      </section>
      <Joke/>
    </>
  )
}

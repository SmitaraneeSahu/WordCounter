import React from 'react'
import Header from '../components/Header'
import WordCounter from '../components/WordCounter'

export default function Home() {
  return (
    <>
      <Header/>
      <section className="header">
        <h1 data-testid="heading" >Word Counter</h1>
        <p data-testid="subHeading">Free online character and word count tool.</p>
      </section>
      <WordCounter/>
    </>
  )
}

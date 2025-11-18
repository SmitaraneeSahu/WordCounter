import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <main>
      <section className='pnf'>
        <div className='oops'>
          <p data-testid = "pnfText">Oops - page not found</p>
          <img src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt='pageNotFound'/>
          <Link to="/">
            <button data-testid="homeBtn">Back to Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}

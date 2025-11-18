import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <span><Link to="/" className='nav-btn'> WordCounter</Link></span>
        <span><Link to="/joke" className='nav-btn'>Joke</Link></span>
      </nav>
    </header>
  )
}

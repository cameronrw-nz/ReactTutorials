import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Navigator = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/tictactoe'>Tic Tac Toe Game</Link></li>
      </ul>
    </nav>
  </header>
)

export default Navigator
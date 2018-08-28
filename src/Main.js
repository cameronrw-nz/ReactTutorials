import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import TicTacToe from './TicTacToe'

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tictactoe' component={TicTacToe} />
    </Switch>
  </main>
)

export default Main

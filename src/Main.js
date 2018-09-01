import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './MainDisplay/Home'
import TicTacToe from './MainDisplay/TicTacToe'
import DateString from './Common/DateString'

const Main = () => (
  <main>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tictactoe' component={TicTacToe} />
    </Switch>
    <DateString />
  </main>
)

export default Main

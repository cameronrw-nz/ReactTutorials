import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import TicTacToe from './TicTacToe/TicTacToe'
import Product from './Product/ProductComponent'
import DateString from '../Common/DateString'

import '../styles/index.css';

const Main = () => (
  <main className="mainContent">
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/tictactoe' component={TicTacToe} />
        <Route path='/product' component={Product} />
    </Switch>
    <DateString />
  </main>
)

export default Main

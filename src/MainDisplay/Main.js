import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home/Home'
import TicTacToe from './TicTacToe/TicTacToe'
import MineSweeper from './MineSweeper/MineSweeper'
import Product from './Product/ProductComponent'
import DateString from '../Common/DateString'
import * as RoutingConstants from '../Common/RoutingConstants'

import '../styles/index.css';

const Main = () => (
  <main className="mainContent">
    <Switch>
        <Route exact path={RoutingConstants.HOME} component={Home} />
        <Route path={RoutingConstants.TICTACTOE} component={TicTacToe} />
        <Route path={RoutingConstants.MINESWEEPER} component={MineSweeper} />
        <Route path={RoutingConstants.PRODUCT} component={Product} />
    </Switch>
    <DateString />
  </main>
)

export default Main

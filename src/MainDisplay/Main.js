import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import TicTacToe from "./TicTacToe/TicTacToe";
import MineSweeper from "./MineSweeper/MineSweeper";
import Product from "./Product/ProductComponent";
import Reddit from "./Reddit/RedditController";
import Theme from "./Theme/Theme";
import Charts from "./Chart/Charts";

import * as RoutingConstants from "../Common/RoutingConstants";

const Main = () => (
    <div className="main">
        <main className="mainContent">
            <Switch>
                <Route exact path={RoutingConstants.HOME} component={Home} />
                <Route
                    path={RoutingConstants.TICTACTOE}
                    component={TicTacToe}
                />
                <Route
                    path={RoutingConstants.MINESWEEPER}
                    component={MineSweeper}
                />
                <Route path={RoutingConstants.PRODUCT} component={Product} />
                <Route path={RoutingConstants.REDDIT} component={Reddit} />
                <Route path={RoutingConstants.THEME} component={Theme} />
                <Route path={RoutingConstants.CHARTS} component={Charts} />
            </Switch>
        </main>
    </div>
);

export default Main;

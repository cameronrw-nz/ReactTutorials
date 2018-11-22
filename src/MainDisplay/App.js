import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Main from './Main'
import Navigator from './Navigator'
import DateString from '../Common/DateString'

import '../styles/index.css';

const App = () => (
    <BrowserRouter>
        <div className="main">
            <Navigator />
            <Main />
            <DateString />
        </div>
    </BrowserRouter>
)
  
export default App

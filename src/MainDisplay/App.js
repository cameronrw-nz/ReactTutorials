import React from 'react'
import Main from './Main'
import Navigator from './Navigator'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
    <BrowserRouter>
        <div>
            <Navigator />
            <Main />
        </div>
    </BrowserRouter>
)
  
export default App
  
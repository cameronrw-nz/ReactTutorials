import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Main from './Main'
import Navigator from './Navigator'

const App = () => (
    <BrowserRouter>
        <div>
            <Navigator />
            <Main />
        </div>
    </BrowserRouter>
)
  
export default App
  
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './MainDisplay/App'
import Store from './Store/ReduxStore'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
document.getElementById('root')
);

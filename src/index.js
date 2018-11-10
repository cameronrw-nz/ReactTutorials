import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './MainDisplay/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Store from './Store/ReduxStore'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>,
document.getElementById('root')
);

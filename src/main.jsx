import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
//import './index.css'
import store from './store.js'
import { Provider } from 'redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
)

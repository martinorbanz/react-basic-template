import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

const appRoot = document.querySelector('#app-root')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  appRoot
)

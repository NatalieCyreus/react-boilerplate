import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import DefaultErrorBoundry from './DefaultErrorBoundry'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById('app')
)

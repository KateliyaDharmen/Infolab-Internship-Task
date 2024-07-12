import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Buttons, Second, Third } from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Second />
    <Third />
    <Buttons />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import PortfolioWebsite from './App.jsx'

window.__GOLDEN_RATIO__ = 1.618033988749

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioWebsite />
  </React.StrictMode>,
)
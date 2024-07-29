import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const element = (
  <div className="super-over-league-container">
    <h1 className="heading">Super Over League</h1>
    <div className="teams-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        className="logo-image"
        alt="RCB Logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        className="logo-image"
        alt="CSK Logo"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"))

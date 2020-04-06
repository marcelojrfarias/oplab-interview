import React from 'react'

import './styles.css'

import appIcon from '../../assets/app_icon.png'

export default function Main () {
  return (
    <div className="container">

      <div className="side left"/>
      
      <div className="side right">

        <div className="icon">
          <img className="app-icon" src={appIcon} alt="Logo"/>
        </div>

        <div className="introduction">
          <div className="text">
            <h4>Messenger for Anonymous</h4>
            <h1>Send voice and text message anonymously</h1>
            <p>
              Aria is a messenger for people who prefer anonymity. Chat, call and hangout with friends anonymously.
              Aria is a tor for private conversations. None can catch thou.
            </p>
            <h3>Download Aria for free on</h3>
          </div>
        </div>
      </div>
      
    </div>
  )
}
import React from 'react'

import './styles.css'

import appIcon from '../../assets/app_icon.png'
import appStore from '../../assets/appstore.png'
import playStore from '../../assets/playstore.png'

export default function Main () {
  return (
    <div className="container">

      <div className="side left"/>
      
      <div className="side right">

        <div className="icon">
          <a href="/#"><img className="app-icon" src={appIcon} alt="Logo"/></a>
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
          <div className="image-container">
            <a href="/#"><img className="image" src={appStore} alt="Icon" /></a>
            <a href="/#"><img className="image" src={playStore} alt="Icon" /></a>
          </div>
        </div>

      </div>
      
    </div>
  )
}
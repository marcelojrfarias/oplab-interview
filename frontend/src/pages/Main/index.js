import React from 'react'

import './styles.css'

import appIcon from '../../assets/app_icon.png'

export default function Main () {
  return (
    <div className="container">

      <div className="side left"/>
      
      <div className="side right">
        <div className="app-icon">
          <img className="icon" src={appIcon} alt="Logo"/>
        </div>
      </div>
      
    </div>
  )
}
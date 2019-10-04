import React from 'react'
import './navbar.css'
import Clock from '../clock/Clock'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-item">
        <span>
          The Great Dogsby
        </span>
      </div>
      <div className="nav-item">
        <Clock/>
      </div>
    </div>
  )
}

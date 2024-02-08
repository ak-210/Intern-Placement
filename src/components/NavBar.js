import React, { Component } from 'react'

export default function NavBar(options) {
  return (
    <nav className='navBar flex flex-jc-sb flex-ai-c'>
      <div className='nav-title'>Intern&Placement</div>
      <ul className='nav-links flex'>
        {options.tabs.map(tab => (
          <li key={tab} className={`nav-link pointer ${options.active == tab ? "active" : ""}`}>{tab}</li>
        ))}
      </ul>
    </nav>
  )
}

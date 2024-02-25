import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(options) {
  return (
    <nav className='navBar flex flex-jc-sb flex-ai-c'>
      <Link to='/'>
        <div className='nav-title'>Intern&Placement</div>
      </Link>
      <ul className='nav-links flex'>
        {options.tabs.map(([tab, link]) => (
          <NavLink to={link}>
            <li key={tab} className={`nav-link pointer`}>{tab}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function SubNav(options) {
  return (
    <>
      <ul className='sub-nav-container flex flex-jc-c flex-ai-c'>
        {options.tabs.map((tab, ind) => (
          <Link to={`/${options.from}/${ind}`}>
            <li key={ind} className={`sub-nav-link pointer ${options.id == ind ? "active" : ""}`}>{tab}</li>
          </Link>
        ))}
      </ul>
    </>
  )
}

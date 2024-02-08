import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(options) {
  return (
    <div className='card flex flex-col flex-ai-c'>
        <div className='card-img-container'><img src={options.img_src} alt={options.title} className='card-img' /></div>
        <Link className='card-link center' to={options.link}>
          <button className='card-btn pointer slide'>{options.title}</button>
        </Link>
    </div>
  )
}

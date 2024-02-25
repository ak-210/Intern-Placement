import React from 'react'

export default function QueLink(opt) {
  return (
    <a href={opt.link} target='_blank'>
        <button className='que-link pointer slide'>View Solution</button>
    </a>
  )
}

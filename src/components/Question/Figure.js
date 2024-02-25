import React from 'react'

export default function Figure(opt) {
  return (
    <div className='que-figure-cont'>
        <img className='que-figure' src={opt.figure} alt={opt.alt}/>
    </div>
  )
}

import React from 'react'
import Figure from './Figure.js'
import QueLink from './QueLink.js'
import Constraint from './Constraint.js'

export default function ActiveDetails(opt) {
  return (
    <>
      <div className='que-question'>{opt.que.question}</div>

      {opt.que.figure && <Figure figure={opt.que.figure} alt={opt.que.title} />}

      <Constraint arr={opt.que.constraints} />

      {opt.que.link && <QueLink link={opt.que.link} />}
    </>
  )
}

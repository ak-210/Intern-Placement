import React from 'react'

export default function Constraint(opt) {
  const arr = opt.arr.split(';')
  return (
    <div className='que-constraint flex-col'>
        {arr.map(e => <div>{e}</div>)}
    </div>
  )
}

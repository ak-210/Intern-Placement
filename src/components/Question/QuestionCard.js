import React, { useState } from 'react'
import ActiveDetails from './ActiveDetails.js'

export default function QuestionCard(e) {
  const que = e.que
  const [active, setActive] = useState(false)
  
  window.addEventListener('click', (e) => {
    const ele = document.getElementById(que.num)
    if(ele){
      if (e.target === ele || ele.contains(e.target)) {
        setActive(!active)
      } else {
        setActive(false)
      }
    }
  })

  return (
    <div id={que.num} className={`que-card pointer flex-jc-sb flex-ai-c ${active ? 'active flex-col' : 'flex'}`}>

      <div className='que-title'>{que.title}</div>

      <div className={`que-details`}>
        <div className='detail-item que-comp'>{que.company}</div>
        <div className='detail-item que-topic'>{que.topic}</div>
        <div className={`detail-item que-diff ${que.difficulty}`} >{que.difficulty}</div>
      </div>

      {active && <ActiveDetails que={que} />}
    </div>
  )
}

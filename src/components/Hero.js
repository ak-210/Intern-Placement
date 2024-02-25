import React from 'react'
import Card from './Card.js'

export default function Hero() {
  return (
    <div className='hero-container flex flex-col flex-ai-c'>
        <h1 className='hero-title'>Internship & Placement</h1>
        <h3 className='hero-subtitle'>Teri MAA ko bhi Job Milega...</h3>
        
        <div className='spacer'></div>

        <div className='card-container flex flex-jc-c'>
          <Card title='Exam' img_src='./img/card_exam.jpg' link='/Exam/0'/>
          <Card title='Interview' img_src='./img/card_exam.jpg' link='/Interview/0' />
          <Card title='Preparation' img_src='./img/card_exam.jpg' />
        </div>

        <div className='spacer'></div>

        <span className='hero-text'>
          Dive into the Minds of Top Graduates! <b>Free Past Year Interview Questions and Test Prep</b> from <b>IIT and NIT</b> Champions
        </span>
      </div>
  )
}

import React, { useMemo, useState } from 'react'
import QuestionCard from './QuestionCard.js'
import './question.css'

export default function QueContainer(opt) {
  // const [que, setQue] = useState(opt.questions)
  const [query, setQuery] = useState('')

  const filteredQue = useMemo(() => {
    return opt.questions.filter(e => {
      return e.company.toLowerCase().includes(query.toLowerCase())
  })}, [opt.questions, query])

  return (
    <div className='que-main-cont flex flex-col flex-ai-c'>
      <ul className='que-filter flex flex-jc-sa'>
        <li key={'input'}>
          <input 
            value={query} 
            onChange={e => setQuery(e.target.value)}
            className='filter-input'
            type="search" placeholder='Search for company'
          />
        </li>

        {opt.filters.map(([key, list]) => (
          <li key={key} className='filter-items pointer'>{key}</li>
        ))}
      </ul>

      <div className='que-container  flex flex-col flex-ai-c'>
        {filteredQue.map(e => (
          <QuestionCard que={e} />
        ))}
        {filteredQue.length == 0 && <div className='no-que'>No questions found</div>}
      </div>
    </div>
  )
}

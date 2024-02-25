import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
import SubNav from '../components/SubNav.js'
import QueContainer from '../components/Question/QueContainer.js'
import ToTop from '../components/ToTop.js'
import { MiniLoder } from '../components/Loders.js'
import { exam_filters } from '../functions/constants.js'

export default function Exam(opt) {
    document.querySelector('body').classList = ['bg-exam']
    const [ques, setQues] = useState([])
    const [q_recieved, setQ_recieved] = useState(false)
    console.log(opt.data)
    
    const { id } = useParams()
    const opts = ['Programming', 'Aptitude', 'Case Study']

    useEffect(() => {
        setQ_recieved(false)
        opt.data.then(data => {
            setQues(data.filter(e => e.tags == opts[id]))
            console.log(ques)
            setQ_recieved(true)
        })
    }, [id, opt.data])
    


    return (
        <>
            <ToTop />

            <SubNav id={id} tabs = {opts} from='Exam' />
            
            <div className='spacer'></div>

            {!q_recieved && <MiniLoder />}

            {q_recieved && <QueContainer questions = {ques} filters = {exam_filters} />}

            <div className='spacer'></div>
        </>
    )
}

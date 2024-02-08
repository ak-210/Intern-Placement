import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import SubNav from '../components/SubNav.js'
import getData from '../functions/getData.js'

export default function Exam() {
    const { id } = useParams()
    const opts = ['Programming', 'Aptitude', 'Case Study']
    const allQues = getData()
    return (
        <>
            <NavBar active= {'Exam'} tabs = {['Exam', 'Interview', 'Preparations']} />

            <SubNav id={id} tabs = {opts} />
        </>
    )
}

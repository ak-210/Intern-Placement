import React from 'react'
import SubNav from '../components/SubNav.js'
import { useParams } from 'react-router-dom'

export default function Interview() {
    const { id } = useParams()
    const opts = ['Placements', 'Internships']
    return (
        <>
            <SubNav id={id} tabs = {opts} from='Interview' />
        </>
    )
}

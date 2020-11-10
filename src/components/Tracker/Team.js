import React, {useState, useEffect} from 'react'
import './Team.css'

const Team = () => {
    const [team, setTeam] = useState([])

    const fetching = async () => {
        const results = await fetch('http://api.open-notify.org/astros.json')
        const data = await results.json()
        setTeam([...data.people])
    }

    useEffect( () => {
            fetching()
        }, [])

     const biographyHandler = async(name) => {
        const search = name.replace(/\s+/g, '%') 
        const results = await fetch(`https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${search}`)
        const data = await results.json()
        console.log(data)
        window.open(data[3][0], "_blank")
     }

    return (
        <div className='team-container'>
            <p className='crew-title'> ISS Crew :</p>
            <ul className='crew-member'>
            {team.map(member => (
                <li key={member.name} onClick={() => biographyHandler(member.name)}>{member.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default Team
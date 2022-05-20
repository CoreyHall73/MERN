import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, Link} from 'react-router-dom'

const Details = (props) => {
    //state for holding one
    const [pirate, setPirate] = useState()

    const {pirate_id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/"+pirate_id)
        .then(res => setPirate(res.data))
        .catch(err => console.log(err))
    }, [])



    return (
    <fieldset>
        <legend>Details.jsx</legend>
        {
        (pirate) &&
        <div>
            <h1>{pirate.name}</h1>
            <img src={pirate.url} alt="Pirate Image" width="75" height="75" />
            <h2>{pirate.catchPhrase}</h2>
            <table>
                <thead>
                    <th>About</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Position:</td>
                        <td></td>
                        <td>{pirate.position}</td>
                    </tr>
                    <tr>
                        <td>Treasures:</td>
                        <td></td>
                        <td>{pirate.chests}</td>
                    </tr>
                    <tr>
                        <td>Peg Leg:</td>
                        <td></td>
                        <td>{pirate.pegLeg ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Eye Patch:</td>
                        <td></td>
                        <td>{pirate.eyePatch ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Peg Leg:</td>
                        <td></td>
                        <td>{pirate.handHook ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
        <Link to={"/"}>
                <button>Crew Board</button>
            </Link>
    </fieldset>
    )
}

export default Details
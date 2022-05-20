import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Display = (props) => {
    //state to hold all coming from db
    const [allPirates, setAllPirates] = useState([])

    //state to track refresh
    const [refreshState, setRefreshState] = useState(false)

    const refresh = () => {
        setRefreshState(!refreshState)
    }

    useEffect(() => {
        //make a call to express to get all
        axios.get("http://localhost:8000/api/pirates")
        .then(res => setAllPirates(res.data)) //incoming info is set to state
        .catch(err => console.log(err))
    }, [refreshState])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/pirates/" + id)
        .then(res => refresh())
        .catch(err => console.log(err))
    }


    return (
    <fieldset>
        <legend>Display.jsx</legend>
        <table>
            <tbody>
            { allPirates.map((pirate, index) => {
                return (
                    <tr key={index}>
                        <td><img src={pirate.url} alt="Pirate Image" width="75" height="75" /></td>
                        <td><h3>{pirate.name}</h3></td>
                        <td>
                        <Link to={"/"+pirate._id+"/details"}>
                            <button>View Pirate</button>
                        </Link>
                        <button onClick={(e) => deleteHandler(pirate._id)}>Delete</button>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    </fieldset>
    )
}

export default Display
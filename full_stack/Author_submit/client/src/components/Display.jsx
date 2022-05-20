import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Display = (props) => {

    //state to hold all coming from db
    const [allAuthors, setAllAuthors] = useState([])

    //destructure from props
    const {refreshState, refresh} = props;


    useEffect(() => {

        //make a call to express to get all
        axios.get("http://localhost:8000/api/authors")
        .then(res => setAllAuthors(res.data)) //incoming info is set to state
        .catch(err => console.log(err))
    }, [refreshState])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
        .then(res => refresh())
        .catch(err => console.log(err))
    }


    return (
    <fieldset>
        <legend>DisplayComponent.jsx</legend>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            { allAuthors.map((author, index) => {
                return (
                    <tr key={index}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/edit/${author._id}`}>Edit</Link>
                            <button onClick={(e) => deleteHandler(author._id)}>Delete</button>
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
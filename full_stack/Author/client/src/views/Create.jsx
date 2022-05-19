import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

const Create = (props) => {
    //Declare State
    const [name, setName] = useState("")

    //For navigate
    const navigate = useNavigate();

    //Handler Functions
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 
    const submitHandler = e => {
        e.preventDefault();
        //Make post request to express with state
        axios.post("http://localhost:8000/api/authors/new", {name})
            .then(res => {
                setName("")
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }


    return (
    <fieldset>
        <legend>Create.jsx</legend>
        <h1>Favorite Authors</h1>
        <Link to={'/'}>Home</Link>
        <h2>Add a new author</h2>
        <form onSubmit={submitHandler}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
            <button>Submit</button>
            <Link to={'/'}>
            <button>Cancel</button>
            </Link>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form>
    </fieldset>
    )
}

export default Create
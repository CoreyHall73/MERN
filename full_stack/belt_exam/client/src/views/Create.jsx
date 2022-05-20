import React, {useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios"

const Create = (props) => {
    //Declare State
    const [name, setName] = useState("")
    const [url, setUrl] = useState("")
    const [chests, setChests] = useState(0)
    const [catchPhrase, setCatchPhrase] = useState("")
    const [position, setPosition] = useState("First Mate")
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)

    //For navigate
    const navigate = useNavigate();

    // For ID use
    const {pirate_id} = useParams()

    //Handler Functions
    //Create an array to store errors from the API
    const [errors, setErrors] = useState([]); 
    const submitHandler = e => {
        e.preventDefault();
        // Create obj with pirate info
        const pirateObj = {
            name,
            url,
            chests,
            catchPhrase,
            position,
            pegLeg,
            eyePatch,
            hookHand
        }
        //Make post request to express with state
        axios.post("http://localhost:8000/api/pirates/new", pirateObj)
            .then(res => {
                console.log(res.data)
                navigate("/"+res.data._id+"/details")
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
        <div id='header'>
            <h1>Add Pirate</h1>
            <Link to={"/"}>
                <button>Crew Board</button>
            </Link>
        </div>
        <form onSubmit={submitHandler}>
            <p>
                Name:
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
                Image Url:
                <input type="text" name="url" onChange={(e) => setUrl(e.target.value)}/>
            </p>
            <p>
                # of Treasure Chests
                <input type="num" name='chests' onChange={(e) => setChests(e.target.value)}/>
            </p>
            <p>
                Catch Phrase:
                <input type="text" name="catchPhrase" onChange={(e) => setCatchPhrase(e.target.value)}/>
            </p>
            <p>
                Crew Position:
                <select name="position" id="" onChange={(e) => setPosition(e.target.value)}>
                <option value="First Mate">First Mate</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Powder Monkey">Powder Monkey</option>
            </select>
            </p>
            <p>
                <input type="checkbox" name='pegLeg' onChange={(e) => setPegLeg(e.target.checked)} checked={pegLeg}/>
                Peg Leg
            </p>
            <p>
                <input type="checkbox" name='eyePatch' onChange={(e) => setEyePatch(e.target.checked)} checked={eyePatch}/>
                Eye Patch
            </p>
            <p>
                <input type="checkbox" name='handHook' onChange={(e) => setHookHand(e.target.checked)} checked={hookHand} />
                Hand Hook
            </p>
            <button>Add Pirate</button>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
        </form> 
    </fieldset>
    )
}

export default Create
import React, {useState} from 'react'
import Display from "../components/Display";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
    <fieldset>
        <legend>Main.jsx</legend>
        <div>
            <h1>Pirate Crew 
                <Link to={"/create"}>
                    <button>Add a Pirate</button>
                </Link>
            </h1> 
        </div>
        <Display />
    </fieldset>
    )
}

export default Main
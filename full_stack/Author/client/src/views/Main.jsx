import React, {useState} from 'react'
import Display from "../components/Display";
import { Link } from 'react-router-dom';

const Main = () => {

    //state to track refresh
    const [refreshState, setRefreshState] = useState(false)

    const refresh = () => {
        setRefreshState(!refreshState)
    }


    return (
    <fieldset>
        <legend>Main.jsx</legend>
        <h1>Favorite Authors</h1>
        <Link to={"/create"}>Add an Author</Link>
        <h2>We have quotes by</h2>
        <Display refresh={refresh} refreshState={refreshState}/>
    </fieldset>
    )
}

export default Main
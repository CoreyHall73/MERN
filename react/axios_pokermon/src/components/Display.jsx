import React, { useState } from 'react';
import axios from 'axios';

const Display = () => {
    const [pokeState, setPokeState] = useState([]);

    const eventHandler = () => {
        // API CALL HERE
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => {
                console.log(response.data.results);
                setPokeState(response.data.results);
            })
            .catch(errorResponse => {
                console.log(errorResponse);
                setPokeState(errorResponse);
            })
    }

    return (
        <div>
            <button onClick={eventHandler}>Show Pokedex</button>
            <ul>
            {
                pokeState.length > 0 &&
                pokeState.map((poke, index) => {
                    return (
                        <li key={index}>{poke.name}</li>
                    )
                }) 
            }
            </ul>
        </div>
    )
}

export default Display
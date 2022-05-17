import React from 'react'

const Search = () => {
    return (
    <fieldset>
        <legend>Search.jsx</legend>
        <div>
            <form action="">
                <h3>Search for: <select name="" id="">
                    <option value="">People</option>
                    <option value="">Planets</option>
                    </select> 
                    ID: <input type="text" />
                    <button>Search</button>
                </h3>
            </form>
        </div>
    </fieldset>
    )
}

export default Search
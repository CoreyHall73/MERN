import React from 'react'

const Display = (props) => {
    const {users} = props
    return (
    <fieldset>
        {
        users.map((user, index) => {
            const {firstName, lastName, email, password, confirmPassword} = user;
            return ( 
            <div>
                <h1>Your Form Data</h1>
                <h2>First Name: {firstName}</h2>
                <h2>Last Name: {lastName}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: {password}</h2>
                <h2>Confirm Password: {confirmPassword}</h2>
            </div>
            )
        }
        )}
    </fieldset>
    )
};

export default Display;

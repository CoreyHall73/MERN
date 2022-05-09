// import UserForm from './components/UserForm';
import React, { useState } from  'react';

const User = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");   
    
    return(
            <div>
                <h1>Your Form Data</h1>
                <h2>First Name: {firstName}</h2>
                <h2>Last Name: </h2>
                <h2>Email: </h2>
                <h2>Password: </h2>
                <h2>Confirm Password: </h2>
            </div>
    );
};
    
export default User;
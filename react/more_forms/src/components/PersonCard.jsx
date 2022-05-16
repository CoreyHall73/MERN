import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const {addUser} = props
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");  
    const [emailError, setEmailError] = useState("");  
    const [password, setPassword] = useState("");  
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [passwordMatchError, setPasswordMatchError] = useState("")
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }
    const passwordHandle = (e) => {
        handlePasswordMatch(e)
        handlePasswordLength(e)
    }

    const handlePasswordLength = (e) => {
        const {name, value} = e.target;
        (name === 'password') 
            ? setPassword(value)
            : setConfirmPassword(value)
        if(value.length < 8) {
            (name === 'password')
                ? setPasswordError("Password must be at least 8 characters")
                : setConfirmPasswordError("Password must be at least 8 characters");
        } else {
            (name === 'password')
                ? setPasswordError("")
                : setConfirmPasswordError("");
        }
    }
    const handlePasswordMatch = (e) => {
        const {name, value} = e.target;
        (name==='password' && value !== confirmPassword) || (name==='confirmPassword' && value !== password)
        ? setPasswordMatchError("Passwords must be the same.")
        : setPasswordMatchError("") 
    }

    const createUser = (e) => {
        e.preventDefault();
        let validUser = true;
        if (firstNameError) validUser = false;
        if (lastNameError) validUser = false;
        if (emailError) validUser = false;
        if (passwordError) validUser = false;
        if (confirmPasswordError) validUser = false;
        if (validUser) {
            const newUser = { firstName, lastName, email, password, confirmPassword };
            addUser(newUser);
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } 
    };


    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } value={firstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } value={lastName}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" onChange={ handleEmail } value={email}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" name="password" onChange={ passwordHandle } value={password}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
                {
                    passwordMatchError ?
                    <p style={{color:'red'}}>{ passwordMatchError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" name="confirmPassword" onChange={ passwordHandle } value={confirmPassword}/>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;
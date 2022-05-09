import './App.css';
import UserForm from './components/UserForm';
import User from './components/User';
import React, { useState } from  'react';

function App() {
  const UserInfo = (props) => {
    const [state, setState] = useState({
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      password: props.password,
      confirmPassword: props.confirmPassword
  });
  }
  return (
    <div className="App">
      <UserForm />
      <User />
    </div>
  );
}

export default App;

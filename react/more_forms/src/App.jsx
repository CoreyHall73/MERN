import React, {useState} from 'react';
import UserForm from './components/PersonCard';
import Display from './components/Display';
import './App.css';

function App() {

  const [users, setUsers] = useState([])

  const addUser = (userObj) => {
    setUsers([userObj])
  }


  return (
    <div className="App">
      <UserForm addUser={addUser} />
      <Display users={users} />
    </div>
  );
}

export default App;

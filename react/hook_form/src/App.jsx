import UserForm from './components/UserForm';
import './App.css';
import React, {useState} from "react"

function App() {

  const [users, setUsers] = useState([

  ])

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;

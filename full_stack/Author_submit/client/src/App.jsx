import Main from "./views/Main"
import Create from "./views/Create"
import Edit from "./views/Edit"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <fieldset>
      <legend>App.jsx</legend>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/create" element={<Create />}/>
          <Route path="/edit/:author_id" element={<Edit />}/>
        </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;

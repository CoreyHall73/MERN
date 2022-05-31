import Main from "./views/Main"
import Create from "./views/Create"
import Details from "./views/Details"
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
          <Route path="/:pirate_id/details" element={<Details />}/>
        </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;

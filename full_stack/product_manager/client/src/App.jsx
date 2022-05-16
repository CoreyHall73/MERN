import Main from "./views/main"
import Detail from "./views/detail"
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <fieldset>
      <legend>App.jsx</legend>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/:product_id" element={<Detail />}/>
        </Routes>
    </fieldset>
    </BrowserRouter>
  );
}

export default App;

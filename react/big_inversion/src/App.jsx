import './App.css';
import PersonCard from './components/PersonCard';
let peopleArray = [
  {"firstName":"Jane", "lastName":"Doe", "age":45, "hairColor":"Black"},
  {"firstName":"John", "lastName":"Smith","age":88,"hairColor":"Brown"},
  {"firstName":"Millard", "lastName":"Fillmore","age":50,"hairColor":"Brown"},
  {"firstName":"Maria", "lastName":"Smith","age":62,"hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
      {peopleArray.map(user => {
        return <PersonCard firstName={user.firstName} lastName={user.lastName} age={user.age} hairColor={user.hairColor} />
      })}
    </div>
  );
}

export default App;

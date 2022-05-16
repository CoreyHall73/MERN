import React, {useState} from 'react';
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [TodoItems, setTodoItems] = useState([]);

  const addTodo = (Todo) => {
    setTodoItems([...TodoItems, Todo]);
    setNewTodo("");
}

const deleteTodo = (delI) => {
  const filteredTodos = TodoItems.filter((todo, i) => {
      return i !== delI;
  })
  setTodoItems(filteredTodos);
}


  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <Display TodoItems={TodoItems} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

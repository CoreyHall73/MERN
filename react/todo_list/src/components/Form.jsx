import React, {useState} from 'react'

const Form = (props) => {
    const {addTodo} = props;
    const [newTodo, setNewTodo] = useState("")
    const [TodoItems, setTodoItems] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(newTodo);
    };


    return (
    <div>
        <form onSubmit={submitHandler} >
            <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
            <button>Add</button>
        </form>
    </div>
    )
}

export default Form
import React, {useState} from 'react'

const Display = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const {TodoItems, deleteTodo} = props;

    

    return (
    <div>
        {
            TodoItems.map((todo, i) => {
                return(
                <div key={i}>

                    <span>{todo}</span>
                    <input type="checkbox" />
                    <button onClick={(e) => {
                        deleteTodo(i);
                    }}>Delete</button>
                </div>
            )
        })
        }
    </div>
    )
}

export default Display
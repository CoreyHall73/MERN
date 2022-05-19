import React, { useState } from 'react'
import axios from "axios"

const Form = (props) => {
    //Declare State
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    //destructure
    const { refresh } = props;

    //Handler functions
    const submitHandler = event => {
        event.preventDefault();
        // Create obj with product info
        const productObj = {
            name,
            price,
            description
        }
        // make post request to express with product obj
        axios.post("http://localhost:8000/api/products/new", productObj)
            .then(res => {
                refresh()
                setName("")
                setPrice(0)
                setDescription("")
            })
            .catch(err => console.log(err))
    }

    return (
        <fieldset>
            <legend>FormComponent.jsx</legend>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <p>
                    Name:
                    <input type="text" name='name' onChange={(e) => setName(e.target.value)} value={name} />
                </p>
                <p>
                    Price:
                    <input type="num" name='price' onChange={(e) => setPrice(e.target.value)} value={price} />
                </p>
                <p>
                    Description:
                    <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} value={description} />
                </p>
                <button>Create</button>
            </form>
        </fieldset>
    )
}

export default Form
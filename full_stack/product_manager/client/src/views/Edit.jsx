import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Edit = (props) => {
    // For navigate
    const navigate = useNavigate()

    //Declare State
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    // For ID use
    const {product_id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + product_id)
            .then(res => {
                setName(res.data.name);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + product_id, {
            name,
            price,
            description
        })
            .then(res => navigate('/'))
            .catch(err => console.error(err));
    }


    return (
    <fieldset>
        <legend>Edit.jsx</legend>
        <h1>Update Product</h1>
        <form onSubmit={updateProduct}>
            <p>
                Name: 
                <input type="text"  name='name' onChange={(e) => setName(e.target.value)} value={name}/>
            </p>
            <p>
                Price:
                <input type="num" name='price' onChange={(e) => setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                Description:
                <input type="text" name='description' onChange={(e) => setDescription(e.target.value)} value={description}/>
            </p>
            <button>Update</button>
        </form>
    </fieldset>
    )
}

export default Edit
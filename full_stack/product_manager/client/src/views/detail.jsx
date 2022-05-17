import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = (props) => {
    // For navigate
    const navigate = useNavigate()

    //state for holding one
    const [product, setProduct] = useState()

    const {product_id} = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/"+product_id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => navigate('/'))
        .catch(err => console.log(err))
    }

    return (
    <fieldset>
        <legend>DetailView.jsx</legend>
        {
        (product) &&
        <div>
            <h1>Name: {product.name}</h1>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <Link to={"/"+product._id+"/edit"} >
            <button>Edit</button>
            </Link>
            <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
        </div>
        }
    </fieldset>
    )
}

export default Detail
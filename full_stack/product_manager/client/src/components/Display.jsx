import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Display = (props) => {

    //state to hold all coming from db
    const [allProducts, setAllProducts] = useState([])

    //destructure from props
    const {refreshState, refresh} = props;

    useEffect(() => {

    //make a call to express to get all
    axios.get("http://localhost:8000/api/products")
    .then(res => setAllProducts(res.data)) //incoming info is set to state
    .catch(err => console.log(err))
}, [refreshState])

    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
        .then(res => refresh())
        .catch(err => console.log(err))
    }


    return (
    <fieldset>
        <legend>DisplayComponent.jsx</legend>
        <h1>All Products</h1>
        {
            allProducts.map((product, index) => {
                return(
                    <div key={index}>
                        <Link to={"/" + product._id}>
                        <h3>{product.name} {product.price}</h3>
                        </Link>
                        <Link to={"/"+product._id+"/edit"}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={(e) => deleteHandler(product._id)}>Delete</button>
                    </div>
                )
            })
        }
    </fieldset>
    )
}

export default Display
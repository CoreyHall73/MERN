import React, {useEffect, useState} from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

const Display = (props) => {

    //state to hold all coming from db
    const [allProducts, setAllProducts] = useState([])

    //destructure from props
    const {refreshState} = props;

    useEffect(() => {

    //make a call to express to get all
    axios.get("http://localhost:8000/api/products")
    .then(res => setAllProducts(res.data)) //incoming info is set to state
    .catch(err => console.log(err))
}, [refreshState])

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
                    </div>
                )
            })
        }
    </fieldset>
    )
}

export default Display
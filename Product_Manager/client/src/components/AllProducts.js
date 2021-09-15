import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {
    Link 
} from "react-router-dom";

const AllProducts = () => {

    //variable to store all the products
    const [allProducts, setallProducts] = useState([])

    // call the api upon loading this page
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res)
            setallProducts(res.data.results)
        })
        .catch(err => console.log("Error", err))
    }, [])

    return (
        <div className = "container input2">
            <h1>All Products</h1>
            {/* get all products from the map */}
            {allProducts.map((product, idx) => {
                return <ul key = {idx}  className="list-group">
                <li className="list-group-item "><Link to={`/show/${product._id}`}>{product.title}</Link> | <Link to = {`/edit/${product._id}`} className = "btn btn-success">Edit</Link> | <Link className = "btn btn-success">Delete</Link></li>
                <br />
              </ul>
            })}
        </div>
    );
};

export default AllProducts;
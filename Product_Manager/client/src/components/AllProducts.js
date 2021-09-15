import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {
    Link 
} from "react-router-dom";

const AllProducts = (props) => {

    //variable to store all the products
    const [allProducts, setallProducts] = useState([])

    const [deleteditem, setDeleteditem] = useState(false)

    // call the api upon loading this page
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            console.log(res)
            setallProducts(res.data.results)
        })
        .catch(err => console.log("Error", err))
    }, [deleteditem, props.submitted ])

    const deleted = (e, id) =>{
        console.log("we deleted this")
            console.log("we deleted this")
            axios.delete(`http://localhost:8000/api/products/${id}`)
                .then(res => {
                    console.log(res)
                    setDeleteditem(!deleteditem)
                })
                .catch(err => console.log("Error"))
        
    }

    return (
        <div className = "App container input2">
            <h1>All Products</h1>
            {/* get all products from the map */}
            {allProducts.map((product, idx) => {
                return <ul key = {idx}  className="App list-group">
                <li className="list-group-item App"><Link to={`/show/${product._id}`}>{product.title}</Link> | <Link to = {`/edit/${product._id}`} className = "btn btn-success">Edit</Link> | <button onClick = { (e) => deleted(e, product._id)} className="btn btn-danger">Delete</button></li>
                <br />
              </ul>
            })}
        </div>
    );
};

export default AllProducts;
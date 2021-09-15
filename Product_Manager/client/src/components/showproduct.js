import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import {
    Link 
} from "react-router-dom";

const ShowProduct = () => {

    const { idParam } = useParams();
    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParam}`)
            .then(res=>{
                console.log("response when trying to get one ninja-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[idParam])

    return (
        <div className = "container">
            <h2>Product info</h2>
            <p>Title: {productInfo.title}</p>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
            <p><Link to ={"/"}  className = "btn btn-success">Home</Link></p>
        </div>
    );
};

export default ShowProduct;
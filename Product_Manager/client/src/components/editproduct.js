import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";

import {
    Link 
} from "react-router-dom";

const Editproduct = () => {

    const { idParam } = useParams();
    const history = useHistory()

    const [productInfo, setProductInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${idParam}`)
            .then(res=>{
                console.log("response when trying to get one ninja-->", res)
                setProductInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[])

    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
        setProductInfo({ 
        ...productInfo,
        [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${idParam}`, productInfo )
            .then(res=>{
                console.log("response afer put request", res)
                history.push(`/show/${idParam}`);
            })
            .catch(err=> console.log("errrrr, ", err))
    }

    return (
        <div>
            <h2>Edit the information below</h2>
            <form onSubmit={submitHandler} className = "form-group container">
                <div className="input container">
                    <label>Title:</label>
                    <input onChange = {changeHandler} name="title" type="text" className="form-control" value = {productInfo.title}/>
                    {/* <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p> */}
                </div>
                <div className="input container ">
                    <label>Price:</label>
                    <input onChange = {changeHandler} name="price" type="number" className="form-control" value = {productInfo.price}/>
                    {/* <p className="text-danger">{validationErrors.price? validationErrors.price.message: ""}</p> */}
                </div>
                <div className="input container ">
                    <label>Description:</label>
                    <input onChange = {changeHandler} name="description" type="text" className="form-control" value = {productInfo.description}/>
                    {/* <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p> */}
                </div>
                <input className="btn btn-success" type="submit" value="Update Product" />
            </form>
            <br />
            <p><Link to ={"/"}  className = "btn btn-success">Home</Link></p>
        </div>
    );
};

export default Editproduct;
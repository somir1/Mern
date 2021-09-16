import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const ProductForm = (props) => {

    const history = useHistory();

    const [formInfo, setFormInfo] = useState({
        title: null,
        price: null,
        description: null
    })

    let [validationErrors, setValidationErrors] = useState({})

    const change = (e) => {
        console.log("blah")

        console.log(e.target.value)

        console.log(e.target.name)
        //use the setter to update the state variable
        setFormInfo({
        //when we modify a form as an object we need to give names to each input 
        //save the existing key value pairs in to a spread operator
        ...formInfo,
        //and overwrite it with the new key value pair
        [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("aye")

        axios.post("http://localhost:8000/api/products/new", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){ //if there is validation errors
                    //do not redirect if there is validation errors
                    //store the errors object from the back end into a state variabel so i can display the state variable info on the page
                    setValidationErrors(res.data.err.errors)

                }else{ //if the form is filled out properly
                props.setSubmitted(!props.submitted)
                //clears the state varibles after we post
                setFormInfo({
                    title: null,
                    price: null,
                    description: null
                })
                //clears the form after we post
                e.target.reset();
                }
            })
            .catch(err=>console.log("errrrrr-->", err))
            
    }

    return (
        <div>
            <h3>Please register a product below</h3>
            <form onSubmit={submitHandler} className = "form-group container">
                <div className="input container">
                    <label>Title:</label>
                    <input onChange = {change} name="title" type="text" className="form-control" />
                    <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p>
                </div>
                <div className="input container ">
                    <label>Price:</label>
                    <input onChange = {change} name="price" type="number" className="form-control" />
                    <p className="text-danger">{validationErrors.price? validationErrors.price.message: ""}</p>
                </div>
                <div className="input container ">
                    <label>Description:</label>
                    <input onChange = {change} name="description" type="text" className="form-control" />
                    <p className="text-danger">{validationErrors.description? validationErrors.description.message: ""}</p>
                </div>
                <input className="btn btn-success" type="submit" value="Register Product" />
            </form>
        </div>
    );
};

export default ProductForm;
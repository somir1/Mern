import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
    Link 
} from "react-router-dom";
  

const MakeAuthor = (props) => {

    const history = useHistory();

    const [formInfo, setFormInfo] = useState({
        name: null
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

        axios.post("http://localhost:8000/api/authors/new", formInfo)
            .then(res=>{
                console.log("response after submitting post request-->", res)
                if(res.data.err){ //if there is validation errors
                    //do not redirect if there is validation errors
                    //store the errors object from the back end into a state variabel so i can display the state variable info on the page
                    setValidationErrors(res.data.err.errors)

                }else{ //if the form is filled out properly
                history.push(`/`);
                props.setSubmitted(!props.submitted)
                }
            })
            .catch(err=>console.log("errrrrr-->", err))

    }
    
    return (
        <div>
            <h1>Add an Author</h1>
            <p><Link to ={"/"}  className = "btn btn-success">Home</Link></p>
            <form onSubmit={submitHandler} className = "form-group container">
            <div className="input container">
                    <label>Title:</label>
                    <input onChange = {change} name="name" type="text" className="form-control" />
                    <p className="text-danger">{validationErrors.name? validationErrors.name.message: ""}</p>
                </div>
                <input className="btn btn-success" type="submit" value="Register Product" />
            </form>
        </div>
    );
};

export default MakeAuthor;
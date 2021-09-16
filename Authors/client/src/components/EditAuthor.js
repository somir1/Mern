import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from "react-router-dom";

import {
    Link 
} from "react-router-dom";


const EditAuthor = () => {

    const { idParam } = useParams();
    const history = useHistory()

    const [authorInfo, setAuthorInfo] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${idParam}`)
            .then(res=>{
                console.log("response when trying to get one ninja-->", res)
                setAuthorInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[])

    const changeHandler = (e)=>{
        console.log("changin something")
        console.log(e.target.name, e.target.value)
        setAuthorInfo({ 
        ...authorInfo,
        [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${idParam}`, authorInfo )
            .then(res=>{
                console.log("response afer put request", res)
                history.push(`/show/${idParam}`);
            })
            .catch(err=> console.log("errrrr, ", err))
    }

    return (
        <div>
            <h1>Edit Author</h1>
            <p><Link to ={"/"}  className = "btn btn-success">Home</Link></p>
            <form onSubmit={submitHandler} className = "form-group container">
                <div className="input container">
                    <label>Name:</label>
                    <input onChange = {changeHandler} name="name" type="text" className="form-control" value = {authorInfo.name}/>
                    {/* <p className="text-danger">{validationErrors.title? validationErrors.title.message: ""}</p> */}
                </div>
                <br />
                <input className="btn btn-success" type="submit" value="Update Author" />
            </form>
        </div>
    );
};

export default EditAuthor;
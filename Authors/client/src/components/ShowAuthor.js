import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {
    Link 
} from "react-router-dom";

const ShowAuthor = () => {

    const { idParam } = useParams();
    const [authorInfo, setAuthorInfo] = useState({})
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${idParam}`)
            .then(res=>{
                console.log("response when trying to get one ninja-->", res.data.results)
                setAuthorInfo(res.data.results)
            })
            .catch(err=>console.log("errrrrrrr ", err))
    },[idParam])

    const deleted = () =>{
        console.log("we deleted this")
        axios.delete(`http://localhost:8000/api/authors/${authorInfo._id}`)
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch(err => console.log("Error"))
    }

    return (
        <div className = "container">
            <h2>Author Name: {authorInfo.name}</h2>
            <p><Link to ={"/"}  className = "btn btn-success">Home</Link> | <button onClick = {deleted}  className = "btn btn-danger">Delete Product</button></p>
        </div>
    );
};

export default ShowAuthor;
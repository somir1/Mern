import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {
    Link 
} from "react-router-dom";

const AllAuthors = () => {

    //variable to store all the products
    const [AllAuthors, setAllAuthors] = useState([])

    const [deleteditem, setDeleteditem] = useState(false)

    // call the api upon loading this page
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
        .then(res => {
            console.log(res)
            setAllAuthors(res.data.results)
        })
        .catch(err => console.log("Error", err))
    }, [deleteditem])

    const deleted = (e, id) =>{
        console.log("we deleted this")
            console.log("we deleted this")
            axios.delete(`http://localhost:8000/api/authors/${id}`)
                .then(res => {
                    console.log(res)
                    setDeleteditem(!deleteditem)
                })
                .catch(err => console.log("Error"))
        
    }

    return (
        <div className="container">
                <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">Author Name</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                {AllAuthors.map((author, idx) => {
                    return <tr>
                    <td><Link to={`/show/${author._id}`}>{author.name}</Link></td>
                    <td><Link to = {`/edit/${author._id}`} className = "btn btn-success">Edit</Link> | <button onClick = { (e) => deleted(e, author._id)} className="btn btn-danger">Delete</button></td>
                  </tr>
                })}
                </tbody>
              </table>
        </div>
    );
};

export default AllAuthors;
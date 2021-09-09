import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";


const Search = () => {

    // using a state varible to store the categories from the api
    const [categories, setCategories]= useState([])

    //state variable to store the info collected in the form
    const [formInfo, setFormInfo] = useState({
        //input name must match these
        category:"people",
        id: ""
    })

    // save the the usehistory function to a variable
    const hist = useHistory();

    //when the page loads it uses axios to call the api and get the object and we can save the info in a sate variable
    useEffect(() => {

        //use axios to get the categories
        axios.get("https://swapi.dev/api/")
            .then(res => {
                console.log(res)
                console.log(Object.keys(res.data))
                //use the state varible to save the categories
                // using object.keys to get the key from the api call
                setCategories(Object.keys(res.data))
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    //when we change the information on the form we want to update the state varible
    const changeHandler = (e) => {
        //value = info store in the input 
        console.log(e.target.value)
        //name = name of the input that was changes
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

    //new function so when we click submit it runs the function
    const submiting = (e) => {
        //prevent it from refreshing and losing data
        e.preventDefault();
        console.log("hahahaha")
        //redirect to the correct route after submitting
        hist.push(`/${formInfo.category}/${formInfo.id}`)// = planets/6

        // axios.get(`https://swapi.dev/api/${formInfo.category}/${formInfo.id}`)
        //     .then(res => {

        //     })
        //     .catch()
    }

    return (
        <div>
            <form onSubmit = {submiting} className="container form-inline row g-3 align-items-center justify-content-center mb-3">
                <div className="col-auto">
                    <select onChange = {changeHandler} name="category" className="form-select">
                        //map the category array to make the options dynamic so when the api has more categories it will automaticlly update
                        {   
                            //(1,2) 1= each item in the list 2=the index number it will be unique 
                            categories.map((cat,idx) => {
                                return <option key = {idx} value={cat}>{cat}</option>
                            })
                        }
                    </select>
                </div>

                <div className="col-auto">
                <input onChange = {changeHandler} type="text" name="id" id="" className="form-control" placeholder="Please input a number" />
                </div>

                <div className="col-auto">
                    <input className = "btn btn-success" type="submit" value="Search" />
               </div>
            </form>
        </div>
    );
};

export default Search;
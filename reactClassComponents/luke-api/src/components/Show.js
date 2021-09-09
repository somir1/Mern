import React, {useEffect, useState} from 'react';
import { useParams } from "react-router";
import axios from 'axios';

const Show = () => {

    //use the use params to use the varibles from the app.js
    //destructing
    const { category, id } = useParams();


    const [info, setInfo] = useState({})

    //use useffect to have the info once the page loads up
    useEffect(() => {
        //now pull the info from the api by using our paramaters
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res => {
            setInfo(res.data)
        })
        .catch(err=>console.log(err))
    }, [id]) //run the function again once the varible

    return (
        <div>
            {/* <h1>{category} {id}</h1> */}

            {category=="people"?
                <>
                    
                    <h3>Name: {info.name}</h3>
                    <h3>Height: {info.height}</h3>
                    <h3>Mass: {info.mass}</h3>
                </>:
                category=="planets"?
                <>
                    
                    <h3>Name: {info.name}</h3>
                    <h3>Climate: {info.climate}</h3>
                    <h3>Terrain: {info.terrain}</h3>
                </>:
                category=="films"?
                <>
                    
                    <h3>Title: {info.title}</h3>
                    <h3>Director: {info.director}</h3>
                    <h3>Producer: {info.producer}</h3>
                </>:
                <>
                    <h1>These aren't the droid your looking for</h1>
                    <img src="https://nerdbot.com/wp-content/uploads/2020/01/1r3fn3-e1579990017466.jpg" alt="" />
                </>
            }
        </div>
    );
};

export default Show;
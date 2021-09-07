import React, {useState} from 'react';
import axios from 'axios'

const PokeAxios = () => {
    const [allPoke, setallPoke] = useState([])

    const clickHandler = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res => {
            console.log(res)

            setallPoke(res.data.results)
        })
        .catch(err => {
            console.log(err)
          })
    }

    return (
    <div className="App container">
      <h1>All Pokemon</h1>
      <button onClick = {clickHandler} type="button" className="btn btn-success">Show All Pokemon</button>
      {
        allPoke.map((poke, idx) => {
          return <div key = {idx} className="container">
            <ul className="list-group">
              <li className="list-group-item">{poke.name}</li>
            </ul>
          </div>
        })
      }
    </div>
    );
};

export default PokeAxios;
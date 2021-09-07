import React, {useState} from 'react';

const Pokemon = () => {

    const [allPoke, setallPoke] = useState([])

    const clickHandler = ()=>{
      console.log("clicked!")
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(res=>{
          
          return res.json()
        }) //.then() means when the response is recieved back successfully from the api call, what to do with it
        .then(res=>{
          console.log("the response looks like this")
          console.log(res.results)
          setallPoke(res.results)
          //save the response to my state variable
          // setAllCoins(res)
        })
        .catch(err=>{
          console.log(err)
        }) //.catch() means if there were any errors that came up in our api request, this is where we will handle those errors
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
export default Pokemon;
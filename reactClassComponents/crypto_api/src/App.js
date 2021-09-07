import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  // const clickHandeler = () => {
  //   // fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  //   // // means response is recived from the api call
  //   // .then(res => {
  //   //   console.log("We good")
  //   //   return res.json()
  //   // })

  //   // .then(res => {
  //   //   console.log("This is working ?")
  //   // })

  //   // .catch(err => {
  //   //   console.log("We got errors")
  //   // })//if any errors in that was in the api request, this where the errors will be handled
  // }

  const [allCoins, setAllCoins] = useState([])
  const [allPoke, setallPoke] = useState([])

  const clickHandler = ()=>{
    console.log("clicked!")
    fetch("https://pokeapi.co/api/v2/pokemon")
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
        // allCoins.map((coin, idx) => {
        //   return <div key = {idx} class="card">
        //   <div className="card-body">
        //     <img src={coin.image} alt="" />
        //     <h4 className="card-title">{coin.name}</h4>
        //     <p className="card-text">Current Price: ${coin.current_price}</p>
        //     <p className="card-text">Last Updated: ${coin.last_updated}</p>
        //   </div>
        // </div>
        
        // })

        allPoke.map((poke, idx) => {
          return <div key = {idx} className="container">
            <ul class="list-group">
              <li class="list-group-item">{poke.name}</li>
            </ul>
          </div>
        })

      }
    </div>
  );
}

export default App;

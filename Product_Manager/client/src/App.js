import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import ShowProduct from './components/showproduct';
import Editproduct from './components/editproduct';

import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

function App() {

  const [submitted, setSubmitted] = useState(false)

  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Product Manager</h1>
      <Switch>

      <Route exact path = "/">
      <ProductForm submitted = {submitted} setSubmitted = {setSubmitted}></ProductForm>
      <hr />
      <AllProducts submitted = {submitted}></AllProducts>
      </Route>

      <Route exact path = "/show/:idParam">
        <ShowProduct></ShowProduct>
      </Route>

      <Route exact path = "/edit/:idParam">
        <Editproduct></Editproduct>
      </Route>


      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

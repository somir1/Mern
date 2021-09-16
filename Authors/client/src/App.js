import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import AllAuthors from './components/AllAuthors';
import ShowAuthor from './components/ShowAuthor';
import EditAuthor from './components/EditAuthor';
import MakeAuthor from './components/MakeAuthor';
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
      <Switch>
      <Route exact path = "/">
      <h1>All Authors</h1>
      <Link to = {`/create`} className = "btn btn-success">Create Author</Link>
      <br />
      <br />
      <AllAuthors></AllAuthors>
      </Route>

      <Route exact path = "/show/:idParam">
        <ShowAuthor></ShowAuthor>
      </Route>

      <Route exact path = "/edit/:idParam">
        <EditAuthor></EditAuthor>
      </Route>

      <Route exact path = "/create">
        <MakeAuthor></MakeAuthor>
      </Route>

      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

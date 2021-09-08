import logo from './logo.svg';
import './App.css';
import Number from './components/Number';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>    
      <Switch>

        <Route path = "/home">
        <h1>Welcome</h1>
        <Link to = "/">/home</Link>
        </Route>

        <Route exact path = "/">
        <h1>Please select Below</h1>
        <Link to = "/home">Click Here</Link>
        </Route>

        <Route path = "/info/:val/:color/:colors">
          <Number></Number>
          <Link to = "/">/home</Link>
        </Route>

        <Route path = "/info/:val/">
          <Number></Number>
          <Link to = "/">/home</Link>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

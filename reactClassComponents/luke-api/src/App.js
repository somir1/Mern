import logo from './logo.svg';
import './App.css';
import Search from './components/Search'
import Show from './components/Show';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1>Welcome, APIWalker</h1>
      {/* will show up in all the routes */}
      Search for: <Search></Search>
      {/* //inside switch will show in the corrpesponding route */}
      <Switch>
        {/* //make a route and turn it into a variable */}
        <Route exact path = "/:category/:id">
          <Show></Show>
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import FunctionalPerson from './components/FunctionalPerson';

function App() {
  return (
    <div className="App">
      <h1>All People</h1>
      <FunctionalPerson
        fname="Samir"
        lname="Hossain"
        age={27}
        hairc="Black"
        eyec="Brown"
      />
      <FunctionalPerson
        fname="Leon"
        lname="Smith"
        age={46}
        hairc="Blonde"
        eyec="Black"
      />
      <FunctionalPerson
        fname="Agent"
        lname="Smith"
        age={66}
        hairc="Brown"
        eyec="Green"
      />
      <FunctionalPerson
        fname="John"
        lname="Doe"
        age={53}
        hairc="Gray"
        eyec="Blue"
      />
    </div>
  );
}

export default App;

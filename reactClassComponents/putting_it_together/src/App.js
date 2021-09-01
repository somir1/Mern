import logo from './logo.svg';
import './App.css';
import Persons from './components/Persons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>All People</h1>
        <Persons fnameOfPerson="Samir" lnameOfPerson="Hossain" age={27} hair="Black" eyes="Brown"></Persons>
        <Persons fnameOfPerson="Jane" lnameOfPerson="Doe" age={20} hair="Black" eyes="Brown"></Persons>
        <Persons fnameOfPerson="Leon" lnameOfPerson="Hossain" age={35} hair="Brown" eyes="Green"></Persons>
        <Persons fnameOfPerson="John" lnameOfPerson="Wick" age={45} hair="Blonde" eyes="Blue"></Persons>
      </header>
    </div>
  );
}

export default App;

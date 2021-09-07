import logo from './logo.svg';
import './App.css';
import Pokemon from './components/Pokemon';
import PokeAxios from './components/PokeAxios';

function App() {
  return (
    <div className="App">
      {/* <Pokemon></Pokemon> */}
      <PokeAxios></PokeAxios>
    </div>
  );
}

export default App;

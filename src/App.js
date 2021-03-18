import "./App.css";
import PokedexProvider from "./context/Provider";
import Pokedex from "./Pokedex";

function App() {
  return (
    <PokedexProvider>
      <div className="container">
        <Pokedex />
      </div>
    </PokedexProvider>
  );
}

export default App;

import useFetchpokemons from "../hooks/useFetchpokemons";

import "../styles/App.css"


function App() {

  const [pokemons] = useFetchpokemons(
    "https://pokeapi.co/api/v2/pokemon/10"
  );
  



         console.log(pokemons.sprites.back_default

          );
  
  return (
    <div className="imagenes">
      {
   <img src={pokemons.sprites.back_default}></img>
      }
    </div>
  );
  }

export default App;

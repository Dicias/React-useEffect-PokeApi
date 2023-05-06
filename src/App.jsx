import { useEffect, useState } from 'react'
import './App.css'

export default function App(){

let pikachu = "https://pokeapi.co/api/v2/pokemon/pikachu"
let bulbasaur = "https://pokeapi.co/api/v2/pokemon/bulbasaur"
let charmander = "https://pokeapi.co/api/v2/pokemon/charmander"
let squirtle = "https://pokeapi.co/api/v2/pokemon/squirtle"

const [pokemonSprite, setPokemonSprite] =useState(null)
const [pokemonName, setPokemonName] =useState(null)
const [isLoading, setIsLoading] = useState(true)
const [currentValue, setCurrentValue] = useState(null);
const [pokemonType, setPokemonType] = useState(null)
const [pokemonTypeLink, setPokemonTypeLink] = useState(null) //queda Pendiente


useEffect(() => {
  if (currentValue) {
    fetch(currentValue)
      .then(res => res.json())
      .then(data => {
        setPokemonName(data.name)
        setPokemonSprite(data.sprites.front_default)
        setPokemonType(data.types[0].type.name)
        setPokemonTypeLink(data.types[0].type.url)
      })
  }
}, [currentValue])


const showPokemon = (value) => {
  //console.log("Se ejecuto un show");
  //console.log(value);
  setCurrentValue(value);
  setIsLoading(false);
}


  
function volver(){
  setCurrentValue(null);
  setIsLoading(true)
}


if(isLoading){
return(
  <>
    <h1>Selecciona tu pokémon</h1>
<div>
  
<button onClick={() => showPokemon(pikachu)}>Pikachu </button>
<button onClick={() => showPokemon(bulbasaur)}>Bulbasaur</button>
<button onClick={() => showPokemon(charmander)}>Charmander</button>
<button onClick={() => showPokemon(squirtle)}>Squirtle</button>

</div> 
</>   
)
}
  return(
    <div>
    <div>
      <h2>Elegiste a...</h2>
      <p>{pokemonName}</p>
      <img src={pokemonSprite}/>
        
    </div>
    <div>
    <a >{pokemonType}</a>
    <button onClick={()=>volver()}>Volver</button>
    </div>
    </div>
    )

}
import { appState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js";
import { pokemonService } from "../Services/PokemonService.js";
import { Pop } from "../Utils/Pop.js";


function _drawDex() {
  let template = ''
  appState.pokemon.forEach(mon => {
    template += Pokemon.dexTemplate(mon)
  })
  document.getElementById('pokedex-list').innerHTML = template
}

function _drawActive() {
  document.getElementById('active-mon').innerHTML = appState.activeMon.ActiveTemplate
}

export class PokemonController {
  constructor() {
    this.getPokedex()
    appState.on('pokemon', _drawDex)

    appState.on('activeMon', _drawActive)

  }

  async getActiveMon(name) {
    try {

      await pokemonService.getActiveMon(name)
    } catch (error) {
      console.error(error)
      Pop.error("unable to fetch mon")
    }
  }

  async getPokedex() {
    try {
      await pokemonService.getPokedex()
    } catch (error) {
      console.error(error);
      Pop.error("error grabbing pokemon from api")
    }
  }
}
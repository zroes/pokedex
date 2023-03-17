import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

// @ts-ignore
const pokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000
})


class PokemonService {
  async getActiveMon(name) {
    const res = await pokemonAPI.get(`pokemon/${name}`)
    appState.activeMon = new Pokemon(res.data)
    console.log(res.data)
  }
  async getPokedex() {
    const res = await pokemonAPI.get('pokemon?limit=1008&offset=0')
    console.log("[ALL POKEMON]", res.data)
    appState.pokemon = res.data.results
    console.log(appState.pokemon);
  }

}


export const pokemonService = new PokemonService()
import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"

//@ts-ignore
const sandboxAPI = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/zack/",
  timeout: 5000
})

class SandboxService {
  async deleteFavorite(id) {
    const res = await sandboxAPI.delete(`pokemon/${id}`)
    console.log(res.data);
    appState.favorites = appState.favorites.filter(mon => mon.index != id)
    appState.emit('favorites')
  }
  async getFavorites() {
    const res = await sandboxAPI.get('pokemon')
    appState.favorites = res.data.map(mon => new Pokemon(mon))
    console.log(appState.favorites);
  }
  async favorite() {
    const fav = appState.activeMon
    const res = await sandboxAPI.post('pokemon', fav)
    console.log("favoriting", res.data);
    appState.favorites.push(fav)
    appState.emit('favorites')
    // console.log(appState.favorites);
  }

}

export const sandboxService = new SandboxService()
import { appState } from "../AppState.js"
import { sandboxService } from "../Services/SandboxService.js"
import { Pop } from "../Utils/Pop.js"


function _drawFavorites() {
  let template = ''
  appState.favorites.forEach(mon => {
    template += mon.FavoriteTemplate
  })
  document.getElementById('favorites-list').innerHTML = template
}

export class SandboxController {
  constructor() {
    appState.on('favorites', _drawFavorites)
    this.getFavorites()
  }

  async deleteFavorite(id) {
    await sandboxService.deleteFavorite(id)
  }

  async getFavorites() {
    try {
      sandboxService.getFavorites()
    } catch (error) {
      console.error(error)
      Pop.error('error fetching favorites')
    }
  }
  async favorite() {
    try {
      await sandboxService.favorite()
    } catch (error) {
      console.error(error)
    }
  }
}
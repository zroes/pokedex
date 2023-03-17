import { appState } from "../AppState.js"


export class Pokemon {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.sprites.other['official-artwork'].front_default
    this.index = data.id

  }

  static dexTemplate(mon) {
    return `<h5 class="bg-card py-2 selectable rounded elevation-5" style="text-transform:capitalize;"
    onclick="app.pokemonController.getActiveMon('${mon.name}')">
    #${this.indexFormatter(appState.pokemon.indexOf(mon) + 1)} •${mon.name}</h5>`
  }

  get FavoriteTemplate() {
    return `
    <div class="wider bg-card pt-2 mb-2 selectable rounded elevation-5"
      onclick="app.pokemonController.getActiveMon('${this.name}')">
      <h5 class="" style="text-transform:capitalize;">•${this.name}</h5>
      <h6 class="text-end px-3"><i onclick="app.sandboxController.deleteFavorite('${this.index}')" class="mdi mdi-delete "></i></h6>
    </div >
      `
  }

  static indexFormatter(i) {
    let s = '0000' + i
    return s.substring(s.length - 4)
  }

  get ActiveTemplate() {
    return `
      <div class="row justify-content-center" id = "mon-card" >
        <div class="onclick=col-11 text-center rounded elevation-5 my-5 bg-card">
          <div onclick="app.sandboxController.favorite()" class="favorite"><i class="mdi mdi-heart"></i></div>
          <img class="active-img"
            src="${this.img}"
            alt="">
            <h2>#${this.index}</h2>
            <h1 style="text-transform:capitalize;">${this.name}</h1>
        </div>
    </ >
      `;
  }
}
import { PokemonController } from "./Controllers/PokemonController.js";
import { SandboxController } from "./Controllers/SandboxController.js";

class App {

  pokemonController = new PokemonController();

  sandboxController = new SandboxController()
}

window["app"] = new App();

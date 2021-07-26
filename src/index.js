import Environment from "./scripts/environment";
import Search from "./scripts/search";

document.addEventListener('DOMContentLoaded', () => {
  let gameHook = document.getElementById('game-environment');
  let environment = new Environment(gameHook);

  let searchHook = document.getElementById('user-input');
  let search = new Search(searchHook, environment);

  environment.run();
});
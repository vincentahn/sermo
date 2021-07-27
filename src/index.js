import Environment from "./scripts/environment";
import Search from "./scripts/search";
import Clock from "./scripts/clock";

document.addEventListener('DOMContentLoaded', () => {
  let gameHook = document.getElementById('game-environment');
  let environment = new Environment(gameHook);

  let searchHook = document.getElementById('user-input');
  let search = new Search(searchHook, environment);

  let clockHook = document.getElementById('clock-canvas');
  let clock = new Clock(clockHook, environment);

  environment.run();
});
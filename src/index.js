import Environment from "./scripts/environment";
import Search from "./scripts/search";
import Clock from "./scripts/clock";
import Reset from "./scripts/reset";
import { setupHomePage } from "./scripts/util/home_page";

// import testImage from './assets/right-arrow.png';

document.addEventListener('DOMContentLoaded', () => {
  let gameHook = document.getElementById('game-environment');
  let environment = new Environment(gameHook);

  let searchHook = document.getElementById('user-input');
  let search = new Search(searchHook, environment);

  let clockHook = document.getElementById('clock-canvas');
  let clock = new Clock(clockHook, environment);

  let resetHook = document.getElementById('reset-button');
  let reset = new Reset(resetHook, environment);

  setupHomePage();

  environment.run();
});
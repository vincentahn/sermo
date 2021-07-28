import Environment from "./scripts/environment";
import Search from "./scripts/search";
import Clock from "./scripts/clock";
import Reset from "./scripts/reset";

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

  // let test = document.getElementById('test')
  // let context = test.getContext('2d');
  // let img = new Image();
  // img.onload = function(){
  //   context.fillStyle = "gray";
  //   context.fillRect(0, 0, test.clientWidth, test.clientHeight);

  //   context.globalCompositeOperation = "destination-in";
  //   context.drawImage(this, 0, 0, 40, 40);
  // };
  // img.src = './src/assets/right-arrow.png';

  environment.run();
});
import Clock from "./clock";

class Environment{
  constructor(hook){
    this.hook = hook;
    this.elements = [];
    
    this.canvas = document.createElement('canvas');
    this.hook.appendChild(this.canvas);    

    this.animating = true;

    this.render = this.render.bind(this);
  }

  addClock(clock){
    this.clock = clock;
  }

  resizeCanvasToDisplaySize(){
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }
  
  toggleAnimation(){
    this.animating = !this.animating;
    console.log(this.animating);
  }

  insertElement(element){
    this.elements.push(element);
  }

  render(timestamp){
    if(this.animating){
      if(this.clock){
        this.clock.render();
      }

      this.resizeCanvasToDisplaySize();
  
      this.elements.forEach(element => element.render());
    }
    
    window.requestAnimationFrame(this.render);
  }

  run(){
    window.requestAnimationFrame(this.render);
  }
}

export default Environment;
import MouseTracker from "./mouse_tracker";

class Environment{
  constructor(hook){
    this.hook = hook;
    this.elements = [];
    
    this.canvas = document.createElement('canvas');
    this.hook.appendChild(this.canvas);    
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
    
    this.animating = true;

    this.mouseTracker = new MouseTracker(this.canvas, this.elements);

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
    if(this.animating && this.elements.length > 0){
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
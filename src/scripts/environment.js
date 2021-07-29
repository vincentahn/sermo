import MouseTracker from "./mouse_tracker";

class Environment{
  constructor(hook){
    this.hook = hook;
    this.elements = [];
    this.alteration = undefined;
    
    this.elementCanvas = document.createElement('canvas');
    this.hook.appendChild(this.elementCanvas);

    this.resizeCanvasToDisplaySize();
    
    this.animating = true;

    this.mouseTracker = new MouseTracker(this);

    this.render = this.render.bind(this);
  }

  resetElements(){
    this.elements = [];
    this.resizeCanvasToDisplaySize();
    this.animating = false;
  }

  addClock(clock){
    this.clock = clock;
  }

  resizeCanvasToDisplaySize(){
    this.elementCanvas.width = this.elementCanvas.parentElement.clientWidth;
    this.elementCanvas.height = this.elementCanvas.parentElement.clientHeight;

    if(this.alterationCanvas){
      this.alterationCanvas.width = this.alterationCanvas.parentElement.clientWidth;
      this.alterationCanvas.height = this.alterationCanvas.parentElement.clientHeight;
    }
  }
  
  toggleAnimation(){
    if(this.elements.length > 0){
      this.animating = !this.animating;
    }

    console.log(this.animating);
  }

  insertElement(element){
    if(this.elements.length === 0){
      this.animating = true;
    }

    this.elements.push(element);
  }

  render(timestamp){
    if(this.elements.length > 0){
      if(this.clock){
        this.clock.render(this.animating);
      }

      this.resizeCanvasToDisplaySize();

      if(this.alteration){
        this.alteration.render();
      }
  
      this.elements.forEach(element => element.render(this.animating));
    }
    
    window.requestAnimationFrame(this.render);
  }

  run(){
    window.requestAnimationFrame(this.render);
  }

  addAlterationCanvas(){
    this.alterationCanvas = document.createElement('canvas');
    this.hook.appendChild(this.alterationCanvas);

    return this.alterationCanvas;
  }
  
  insertAlteration(alteration){
    this.alteration = alteration;
    this.animating = false;
    this.mouseTracker.addAlterationCanvas(this.alterationCanvas);
  }

  removeAlteration(){
    this.alteration = undefined;
    this.animating = true;

    this.hook.removeChild(this.alterationCanvas);
    this.alterationCanvas = undefined;
  }
}

export default Environment;
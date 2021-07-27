class Environment{
  constructor(hook){
    this.hook = hook;
    this.elements = [];
    
    this.canvas = document.createElement('canvas');
    this.hook.appendChild(this.canvas);    

    this.render = this.render.bind(this);
  }

  resizeCanvasToDisplaySize(){
    this.canvas.width = this.canvas.parentElement.clientWidth;
    this.canvas.height = this.canvas.parentElement.clientHeight;
  }

  insertElement(element){
    this.elements.push(element);
  }

  render(timestamp){
    this.resizeCanvasToDisplaySize();

    this.elements.forEach(element => element.render());
    
    window.requestAnimationFrame(this.render);
  }

  run(){
    window.requestAnimationFrame(this.render);
  }
}

export default Environment;
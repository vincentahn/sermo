class MouseTracker{
  constructor(environment, elements){
    this.environment = environment;
    this.canvas = this.environment.canvas;
    this.elements = elements;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);

    this.canvas.addEventListener('mousedown', this.handleMouseDown);    
  }

  handleMouseDown(e){
    for(let element of this.elements){
      if(element.confirmInsideElement(e.offsetX, e.offsetY)){
        console.log("Hi");

        this.environment.animating = false;
        this.draggedElement = element;
        this.canvas.addEventListener('mousemove', this.handleDrag);
        this.canvas.addEventListener('mouseup', this.handleDrop);
        break;
      }
    }
  }

  handleDrag(e){
    this.draggedElement.posX = e.offsetX;
    this.draggedElement.posY = e.offsetY;
  }

  handleDrop(e){
    console.log("Dropped");
    console.log(e.offsetX);
    console.log(e.offsetY);
    
    this.environment.animating = true;
    this.draggedElement.droppedElement();
    this.draggedElement = undefined;
    this.canvas.removeEventListener('mousemove', this.handleDrag);
    this.canvas.removeEventListener('mouseup', this.handleDrop);
  }
};

export default MouseTracker;
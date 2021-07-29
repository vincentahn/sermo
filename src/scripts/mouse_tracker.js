class MouseTracker{
  constructor(environment, elements){
    this.environment = environment;
    this.elementCanvas = this.environment.elementCanvas;
    this.elements = elements;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleDrop = this.handleDrop.bind(this);

    this.elementCanvas.addEventListener('mousedown', this.handleMouseDown);    
  }
  // Need to add MouseTracker methods for Alteration class

  handleMouseDown(e){
    for(const element of this.elements){
      if(element.confirmInsideElement(e.offsetX, e.offsetY)){
        this.environment.animating = false;
        this.draggedElement = element;
        this.elementCanvas.addEventListener('mousemove', this.handleDrag);
        this.elementCanvas.addEventListener('mouseup', this.handleDrop);
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
    this.draggedElement = undefined;
    this.elementCanvas.removeEventListener('mousemove', this.handleDrag);
    this.elementCanvas.removeEventListener('mouseup', this.handleDrop);
  }
};

export default MouseTracker;
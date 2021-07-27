class MouseTracker{
  constructor(canvas, elements){
    this.canvas = canvas;
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
    
    this.draggedElement.droppedElement();
    this.draggedElement = undefined;
    this.canvas.removeEventListener('mousemove', this.handleDrag);
    this.canvas.removeEventListener('mouseup', this.handleDrop);
  }
};

export default MouseTracker;
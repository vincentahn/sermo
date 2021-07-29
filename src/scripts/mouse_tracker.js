class MouseTracker{
  constructor(environment){
    this.environment = environment;
    this.elementCanvas = this.environment.elementCanvas;

    this.handleElementMouseDown = this.handleElementMouseDown.bind(this);
    this.handleElementDrag = this.handleElementDrag.bind(this);
    this.handleElementDrop = this.handleElementDrop.bind(this);

    this.handleAlterationMouseDown = this.handleAlterationMouseDown.bind(this);
    this.handleAlterationDrag = this.handleAlterationDrag.bind(this);
    this.handleAlterationDrop = this.handleAlterationDrop.bind(this);

    this.elementCanvas.addEventListener('mousedown', this.handleElementMouseDown);
  }
  
  handleElementMouseDown(e){
    for(const element of this.environment.elements){
      if(element.confirmInsideElement(e.offsetX, e.offsetY)){
        this.environment.animating = false;
        this.draggedElement = element;
        this.elementCanvas.addEventListener('mousemove', this.handleElementDrag);
        this.elementCanvas.addEventListener('mouseup', this.handleElementDrop);
        break;
      }
    }
  }
  
  handleElementDrag(e){
    this.draggedElement.posX = e.offsetX;
    this.draggedElement.posY = e.offsetY;
  }
  
  handleElementDrop(e){    
    this.environment.animating = true;
    this.draggedElement = undefined;
    this.elementCanvas.removeEventListener('mousemove', this.handleElementDrag);
    this.elementCanvas.removeEventListener('mouseup', this.handleElementDrop);
  }

  // Need to add MouseTracker methods for Alteration class
  addAlterationCanvas(canvas){
    this.alterationCanvas = canvas;
    this.alterationCanvas.addEventListener('mousedown', this.handleAlterationMouseDown);
    this.draggedAlteration = this.environment.alteration;
  }

  handleAlterationMouseDown(e){
    // for(const element of this.environment.elements){
    //   if(element.confirmInsideElement(e.offsetX, e.offsetY)){
    //     this.environment.animating = false;
    //     this.draggedElement = element;
    //     this.elementCanvas.addEventListener('mousemove', this.handleElementDrag);
    //     this.elementCanvas.addEventListener('mouseup', this.handleElementDrop);
    //     break;
    //   }
    // }

    console.log("Alteration Canvas clicked");

    if(this.draggedAlteration.confirmInsideAlteration(e.offsetX, e.offsetY)){
      this.alterationCanvas.addEventListener('mousemove', this.handleAlterationDrag);
      this.alterationCanvas.addEventListener('mouseup', this.handleAlterationDrop)
    }
  }
  
  handleAlterationDrag(e){
    this.draggedAlteration.posX = e.offsetX;
    this.draggedAlteration.posY = e.offsetY;
  }
  
  handleAlterationDrop(e){
    debugger;

    for(const element of this.environment.elements){
      if(element.confirmInsideElement(e.offsetX, e.offsetY)){
        element.addAlteration(this.draggedAlteration);
        
        this.draggedAlteration = undefined;
        this.alterationCanvas.removeEventListener('mousemove', this.handleAlterationDrag);
        this.alterationCanvas.removeEventListener('mouseup', this.handleAlterationDrop);
        this.environment.removeAlteration();

        return;
      }
    }

    this.alterationCanvas.removeEventListener('mousemove', this.handleAlterationDrag);
    this.alterationCanvas.removeEventListener('mouseup', this.handleAlterationDrop);
  }
};

export default MouseTracker;
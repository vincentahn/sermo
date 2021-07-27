class MouseTracker{
  constructor(canvas, elements){
    this.canvas = canvas;
    this.elements = elements;

    console.log(this.canvas);

    // this.handleMouseDown = this.handleMouseDown.bind(this);

    this.canvas.addEventListener('mousedown', this.handleMouseDown);
    // this.canvas.addEventListener('click')
    // this.canvas.addEventListener('click')
  }

  handleMouseDown(e){
    console.log(e);
  }
};

export default MouseTracker;
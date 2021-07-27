import Element from "./element";

class Circle extends Element{
  constructor(canvas){
    super(canvas);
    this.context = this.canvas.getContext('2d');
  }

  confirmInBounds(){
    if(this.posX >= this.maxWidth){
      this.posX -= this.maxWidth;
    }else if (this.posX <= 0){
      this.posX += this.maxWidth;
    }

    if(this.posY >= this.maxHeight){
      this.posY -= this.maxHeight;
    }else if (this.posY <= 0){
      this.posY += this.maxHeight;
    }
  }

  render(){
    // debugger;
    this.confirmMax();
    this.posX++;
    this.posY++;

    this.confirmInBounds();

    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.posX, this.posY, 30, 0, 2 * Math.PI);
    this.context.fill();
  }
}

export default Circle;
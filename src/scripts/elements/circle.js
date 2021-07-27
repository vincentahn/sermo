import Element from "./element";

class Circle extends Element{
  constructor(canvas){
    super(canvas);

    this.radius = 30;
  }

  updatePosition(){
    this.posX++;
    this.posY++;
  }

  confirmInBounds(){
    if(this.posX >= (this.maxWidth + this.radius)){
      this.posX -= this.maxWidth + this.radius;
    }else if ((this.posX + this.radius) <= 0){
      this.posX += this.maxWidth + this.radius;
    }

    if(this.posY >= this.maxHeight + this.radius){
      this.posY -= this.maxHeight + this.radius;
    }else if ((this.posY + this.radius) <= 0){
      this.posY += this.maxHeight + this.radius;
    }
  }

  draw(){
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    this.context.fill();
  }

  render(){
    this.updatePosition();

    this.confirmMax();
    this.confirmInBounds();

    this.draw();
  }
}

export default Circle;
import Element from "./element";

class Square extends Element{
  constructor(canvas){
    super(canvas);
    this.sideLength = 60;
    this.angle = 0; // degree
  }

  updatePosition(){
    this.posX++;
    this.posY++;
    this.angle++;
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

  draw(){
    this.context.fillStyle = this.color;

    this.context.translate(this.posX, this.posY);
    this.context.rotate(this.angle * Math.PI / 180);
    this.context.translate(-this.posX, -this.posY);

    const topLeft = this.posX - this.sideLength / 2;
    const topRight = this.posY - this.sideLength / 2;
    this.context.fillRect(topLeft, topRight, this.sideLength, this.sideLength);
  }
  
  render(){
    this.context.save();

    this.updatePosition();
    
    this.confirmMax();
    this.confirmInBounds();
    
    this.draw();

    this.context.restore();
  }
};

export default Square;
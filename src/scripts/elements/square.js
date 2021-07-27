import Element from "./element";

class Square extends Element{
  constructor(canvas){
    super(canvas);
    this.sideLength = 60;
    this.cornerLength = this.sideLength / 2 * Math.sqrt(2);
    this.angle = 0; // degree
  }

  updatePosition(){
    this.posX++;
    this.posY++;
    this.angle++;
  }

  confirmInBounds(){
    if(this.posX >= (this.maxWidth + this.cornerLength)){
      this.posX -= this.maxWidth + this.cornerLength;
    }else if ((this.posX + this.cornerLength) <= 0){
      this.posX += this.maxWidth + this.cornerLength;
    }

    if(this.posY >= this.maxHeight + this.cornerLength){
      this.posY -= this.maxHeight + this.cornerLength;
    }else if ((this.posY + this.cornerLength) <= 0){
      this.posY += this.maxHeight + this.cornerLength;
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
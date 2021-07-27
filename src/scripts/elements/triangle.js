import Element from "./element";

class Triangle extends Element{
  constructor(canvas){
    super(canvas);
    this.sideLength = 60;
    this.altitudeR = this.sideLength * Math.sqrt(3) / 3;
    this.angle = 0; // degree
  }

  updatePosition(){
    this.posX++;
    this.posY++;
    this.angle++;
  }

  confirmInBounds(){
    if(this.posX >= (this.maxWidth + this.altitudeR)){
      this.posX -= this.maxWidth + this.altitudeR;
    }else if ((this.posX + this.altitudeR) <= 0){
      this.posX += this.maxWidth + this.altitudeR;
    }

    if(this.posY >= this.maxHeight + this.altitudeR){
      this.posY -= this.maxHeight + this.altitudeR;
    }else if ((this.posY + this.altitudeR) <= 0){
      this.posY += this.maxHeight + this.altitudeR;
    }
  }

  draw(){
    this.context.fillStyle = this.color;

    this.context.translate(this.posX, this.posY);
    this.context.rotate(this.angle * Math.PI / 180);
    this.context.translate(-this.posX, -this.posY);

    this.context.beginPath();
    this.context.moveTo(this.posX - this.sideLength / 2, this.posY - this.altitudeR / 2);
    this.context.lineTo(this.posX, this.posY + this.altitudeR);
    this.context.lineTo(this.posX + this.sideLength / 2, this.posY - this.altitudeR / 2);
    this.context.fill();
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

export default Triangle;
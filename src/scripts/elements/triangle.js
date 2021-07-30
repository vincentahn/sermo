import Element from "./element";

class Triangle extends Element{
  constructor(canvas){
    super(canvas);
    this.size = 60;
    this.angle = 60; // degree
  }

  confirmInBounds(){
    const altitudeR = this.size / Math.sqrt(3);

    if(this.posX >= (this.maxWidth + altitudeR)){
      this.posX -= this.maxWidth + altitudeR;
    }else if ((this.posX + altitudeR) <= 0){
      this.posX += this.maxWidth + altitudeR;
    }

    if(this.posY >= this.maxHeight + altitudeR){
      this.posY -= this.maxHeight + altitudeR;
    }else if ((this.posY + altitudeR) <= 0){
      this.posY += this.maxHeight + altitudeR;
    }
  }

  draw(){
    const altitudeR = this.size / Math.sqrt(3);

    this.context.fillStyle = this.color;

    this.context.translate(this.posX, this.posY);
    this.context.rotate(this.angle * Math.PI / 180);
    this.context.translate(-this.posX, -this.posY);

    this.context.beginPath();
    this.context.moveTo(this.posX - this.size / 2, this.posY - altitudeR / 2);
    this.context.lineTo(this.posX, this.posY + altitudeR);
    this.context.lineTo(this.posX + this.size / 2, this.posY - altitudeR / 2);
    this.context.fill();
  }
  
  render(animating){
    this.context.save();

    if(animating){
      this.update();
    }
    
    this.confirmMax();
    this.confirmInBounds();
    
    this.draw();

    this.context.restore();
  }

  confirmInsideElement(x, y){
    // Algorithm for calculating points of triangle after rotation in https://gamedev.stackexchange.com/questions/86755/how-to-calculate-corner-positions-marks-of-a-rotated-tilted-rectangle
    // Incredible algorithm for detecting cursor in triangle found in http://totologic.blogspot.com/2014/01/accurate-point-in-triangle-test.html
    const altitudeR = this.size / Math.sqrt(3);

    let p1 = [this.posX - this.size / 2, this.posY - altitudeR / 2];
    let p2 = [this.posX, this.posY + altitudeR];
    let p3 = [this.posX + this.size / 2, this.posY - altitudeR / 2];

    let tempP1 = [p1[0] - this.posX, p1[1] - this.posY];
    let tempP2 = [p2[0] - this.posX, p2[1] - this.posY];
    let tempP3 = [p3[0] - this.posX, p3[1] - this.posY];

    p1[0] = tempP1[0] * Math.cos(this.angle * Math.PI / 180) - tempP1[1] * Math.sin(this.angle * Math.PI / 180) + this.posX;
    p1[1] = tempP1[0] * Math.sin(this.angle * Math.PI / 180) + tempP1[1] * Math.cos(this.angle * Math.PI / 180) + this.posY;
    p2[0] = tempP2[0] * Math.cos(this.angle * Math.PI / 180) - tempP2[1] * Math.sin(this.angle * Math.PI / 180) + this.posX;
    p2[1] = tempP2[0] * Math.sin(this.angle * Math.PI / 180) + tempP2[1] * Math.cos(this.angle * Math.PI / 180) + this.posY;
    p3[0] = tempP3[0] * Math.cos(this.angle * Math.PI / 180) - tempP3[1] * Math.sin(this.angle * Math.PI / 180) + this.posX;
    p3[1] = tempP3[0] * Math.sin(this.angle * Math.PI / 180) + tempP3[1] * Math.cos(this.angle * Math.PI / 180) + this.posY;

    let v1 = [p2[1] - p1[1], -p2[0] + p1[0]];
    let v2 = [p3[1] - p2[1], -p3[0] + p2[0]];
    let v3 = [p1[1] - p3[1], -p1[0] + p3[0]];
    
    let v1c = [x - p1[0], y - p1[1]];
    let v2c = [x - p2[0], y - p2[1]];
    let v3c = [x - p3[0], y - p3[1]];
    
    function scalarProduct(vec1, vec2){
      return vec1[0] * vec2[0] + vec1[1] * vec2[1];
    }

    const calculation = 0 <= scalarProduct(v1, v1c) && 0 <= scalarProduct(v2, v2c) && 0 <= scalarProduct(v3, v3c)

    return calculation;
  }
};

export default Triangle;
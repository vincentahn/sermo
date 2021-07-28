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

    const topLeftX = this.posX - this.sideLength / 2;
    const topLeftY = this.posY - this.sideLength / 2;
    this.context.fillRect(topLeftX, topLeftY, this.sideLength, this.sideLength);
  }
  
  render(animating){
    this.context.save();

    if(animating){
      this.updatePosition();
    }
    
    this.confirmMax();
    this.confirmInBounds();
    
    this.draw();

    this.context.restore();
  }

  confirmInsideElement(x, y){
    const amplitude = this.sideLength / Math.sqrt(2);
    const fortyFiveOffset = 45 * Math.PI / 180;
    const angleRadians = this.angle * Math.PI / 180;

    // Calculate position of Point A
    const posA = [
      this.posX - amplitude * Math.cos(angleRadians - fortyFiveOffset),
      this.posY - amplitude * Math.cos(angleRadians + fortyFiveOffset)
    ];

    // Calculate position of Point B
    const posB = [
      this.posX - amplitude * Math.cos(angleRadians + fortyFiveOffset),
      this.posY + amplitude * Math.cos(angleRadians - fortyFiveOffset)
    ];

    // Calculate position of Point D
    const posD = [
      this.posX + amplitude * Math.cos(angleRadians + fortyFiveOffset),
      this.posY - amplitude * Math.cos(angleRadians - fortyFiveOffset)
    ];

    // Calculate vectors of AM, AB, and AD
    const aToM = [x - posA[0], y - posA[1]]
    const aToB = [posB[0] - posA[0], posB[1] - posA[1]];
    const aToD = [posD[0] - posA[0], posD[1] - posA[1]];

    function scalarProduct(vec1, vec2){
      return vec1[0] * vec2[0] + vec1[1] * vec2[1];
    }

    // debugger;

    // Confirm that AM * AB < AB squared and DM * AD < AD squared (which confirms that point is in circle)
    return scalarProduct(aToM, aToB) < scalarProduct(aToB, aToB) && scalarProduct(aToM, aToD) < scalarProduct(aToD, aToD);
  }
};

export default Square;
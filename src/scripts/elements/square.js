import Element from "./element";

class Square extends Element{
  constructor(canvas){
    super(canvas);
    this.size = 60;
  }

  confirmInBounds(){
    const cornerLength = this.size / Math.sqrt(2);

    if(this.posX >= (this.maxWidth + cornerLength)){
      this.posX -= this.maxWidth + cornerLength;
    }else if ((this.posX + cornerLength) <= 0){
      this.posX += this.maxWidth + cornerLength;
    }

    if(this.posY >= this.maxHeight + cornerLength){
      this.posY -= this.maxHeight + cornerLength;
    }else if ((this.posY + cornerLength) <= 0){
      this.posY += this.maxHeight + cornerLength;
    }
  }

  draw(){
    this.context.fillStyle = this.color;

    this.context.translate(this.posX, this.posY);
    this.context.rotate(this.angle * Math.PI / 180);
    this.context.translate(-this.posX, -this.posY);

    const topLeftX = this.posX - this.size / 2;
    const topLeftY = this.posY - this.size / 2;
    this.context.fillRect(topLeftX, topLeftY, this.size, this.size);

    const amplitude = this.size / Math.sqrt(2);
    const fortyFiveOffset = 45 * Math.PI / 180;
    const angleRadians = this.angle * Math.PI / 180;
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
    // Useful algorithm found in https://math.stackexchange.com/questions/2157931/how-to-check-if-a-point-is-inside-a-square-2d-plane
    const amplitude = this.size / Math.sqrt(2);
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
    
    // Confirm that 0 < AM * AB < AB squared and 0 < DM * AD < AD squared (which confirms that point is in circle)
    return scalarProduct(aToM, aToB) > 0 && scalarProduct(aToM, aToB) < scalarProduct(aToB, aToB) && scalarProduct(aToM, aToD) > 0 && scalarProduct(aToM, aToD) < scalarProduct(aToD, aToD);
  }
};

export default Square;
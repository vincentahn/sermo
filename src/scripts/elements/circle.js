import Element from "./element";

class Circle extends Element{
  //Radius is half of this.size

  constructor(canvas){
    super(canvas);
  }

  confirmInBounds(){
    if(this.posX >= (this.maxWidth + this.size / 2)){
      this.posX -= this.maxWidth + this.size / 2;
    }else if ((this.posX + this.size / 2) <= 0){
      this.posX += this.maxWidth + this.size / 2;
    }

    if(this.posY >= this.maxHeight + this.size / 2){
      this.posY -= this.maxHeight + this.size / 2;
    }else if ((this.posY + this.size / 2) <= 0){
      this.posY += this.maxHeight + this.size / 2;
    }
  }

  draw(){
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.posX, this.posY, this.size / 2, 0, 2 * Math.PI);
    this.context.fill();
  }

  render(animating){
    if(animating){
      this.update();
    }

    this.confirmMax();
    this.confirmInBounds();

    this.draw();
  }

  confirmInsideElement(x, y){
    if(Math.sqrt(
      Math.pow(x - this.posX, 2) + 
      Math.pow(y - this.posY, 2)
    ) <= this.size / 2){
      return true;
    }else{
      return false;
    }
  }
}

export default Circle;
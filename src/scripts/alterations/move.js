import Alteration from "./alteration";

class Move extends Alteration{
  constructor(canvas){
    super(canvas);
    this.ready = false;
    this.image.onload = () => this.ready = true;
    this.image.src = "./src/assets/right-arrow.png";
  }

  draw(){
    if(this.angle !== undefined){
      this.context.fillStyle = this.color;
      this.context.fillRect(this.posX - this.width / 2, this.posY - this.height / 2, this.width, this.height);
      this.context.globalCompositeOperation = "destination-in";

      this.context.translate(this.posX, this.posY);
      this.context.rotate(this.angle * Math.PI / 180);
      this.context.translate(-this.posX, -this.posY);

      this.context.drawImage(this.image, this.posX - this.width / 2, this.posY - this.height / 2, this.width, this.height);
    }else{
      console.log('Alteration angle is undefined!');
    }
  }
  
  render(){
    if(this.ready){
      this.context.save();
  
      this.draw();
  
      this.context.restore();
    }
  }

  confirmInsideAlteration(x, y){
    return x > (this.posX - this.width / 2) && x < (this.posX + this.width / 2) && y > (this.posY - this.height / 2) && y < (this.posY + this.height / 2);
  }
};

export default Move;
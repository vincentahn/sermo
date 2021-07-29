import Alteration from "./alteration";

class RightMove extends Alteration{
  constructor(canvas){
    super(canvas);

    this.ready = false;
    this.image.onload = () => this.ready = true;
    this.image.src = "./src/assets/right-arrow.png";
  }

  draw(){
    this.context.fillStyle = this.color;
    this.context.fillRect(this.posX - this.width / 2, this.posY - this.height / 2, this.width, this.height);
    this.context.globalCompositeOperation = "destination-in";
    this.context.drawImage(this.image, this.posX - this.width / 2, this.posY - this.height / 2, this.width, this.height);
  }
  
  render(){
    if(this.ready){
      this.context.save();
  
      this.draw();
  
      this.context.restore();
    }
  }
};

export default RightMove;
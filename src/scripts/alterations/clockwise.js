import Rotate from "./rotate";

class Clockwise extends Rotate{
  constructor(canvas){
    super(canvas);
    this.image.src= "./src/assets/clockwise.png";
  }

  morphElement(element){
    element.offsetAngle++;
  }

  update(element){
    element.angle += element.offsetAngle;
  }
};

export default Clockwise;
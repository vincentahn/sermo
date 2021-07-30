import Rotate from "./rotate";

class CounterClockwise extends Rotate{
  constructor(canvas){
    super(canvas);
    this.image.src= "./src/assets/counter-clockwise.png";
  }

  morphElement(element){
    element.offsetAngle--;
  }

  update(element){
    element.angle += element.offsetAngle;
  }
};

export default CounterClockwise;
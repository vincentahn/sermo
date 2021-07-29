import Move from "./move";

class LeftMove extends Move{
  constructor(canvas){
    super(canvas);

    this.angle = 180;
  }

  morphElement(element){
    element.offsetX--;
  }

  update(element){
    element.posX += element.offsetX;
  }
};

export default LeftMove;
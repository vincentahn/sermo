import Move from "./move";

class UpMove extends Move{
  constructor(canvas){
    super(canvas);

    this.angle = 270;
  }

  morphElement(element){
    element.offsetY--;
  }

  update(element){
    element.posY += element.offsetY;
  }
};

export default UpMove;
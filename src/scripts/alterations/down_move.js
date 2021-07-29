import Move from "./move";

class DownMove extends Move{
  constructor(canvas){
    super(canvas);

    this.angle = 90;
  }

  morphElement(element){
    element.offsetY++;
  }

  update(element){
    element.posY += element.offsetY;
  }
};

export default DownMove;
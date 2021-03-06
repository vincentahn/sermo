import Move from "./move";

class RightMove extends Move{
  constructor(canvas){
    super(canvas);

    this.angle = 0;
  }

  morphElement(element){
    element.offsetX++;
  }

  update(element){
    element.posX += element.offsetX;
  }
};

export default RightMove;
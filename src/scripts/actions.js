import Circle from "./elements/circle";
import Square from "./elements/square";

class ActionList{
  constructor(environment){
    this.list = {
      circle: Circle,
      square: Square
    };

    this.environment = environment;

    this.act = this.act.bind(this);
  }

  act(input){
    // debugger;
    let newElement = new this.list[input](this.environment.canvas);
    this.environment.insertElement(newElement);
  }
};

export default ActionList;
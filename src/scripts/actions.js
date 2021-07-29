import Circle from "./elements/circle";
import Square from "./elements/square";
import Triangle from "./elements/triangle";
import RightMove from "./alterations/right_move";

class ActionList{
  constructor(environment){
    this.elementList = {
      circle: Circle,
      square: Square,
      triangle: Triangle
    };
    
    this.alterationList = {
      right: RightMove
    };

    this.environment = environment;

    this.create = this.create.bind(this);
  }

  create(input){
    let newElement = new this.elementList[input](this.environment.elementCanvas);
    this.environment.insertElement(newElement);
  }

  alter(input){
    let alterationCanvas = this.environment.addAlterationCanvas();
    let newAlteration = new this.alterationList[input](alterationCanvas);
    this.environment.insertAlteration(newAlteration);
  }
};

export default ActionList;
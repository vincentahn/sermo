import Circle from "./elements/circle";

class ActionList{
  constructor(environment){
    this.list = {
      circle: Circle
    };

    this.environment = environment;

    this.act = this.act.bind(this);
  }

  act(input){
    // debugger;
    let circle = new Circle(this.environment.canvas);
    this.environment.insertElement(circle);
  }
};

export default ActionList;
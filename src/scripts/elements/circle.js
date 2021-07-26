import Element from "./element";

class Circle extends Element{
  constructor(){
    super();

    this.context = this.hook.getContext('2d');
    this.render();
  }

  getRandom(num){
    return Math.floor(Math.random() * num);
  }

  render(){
    this.context.beginPath();
    console.log(this.color);
    this.context.fillStyle = 'white';
    this.context.arc(this.getRandom(50), this.getRandom(50), 10, 0, 2 * Math.PI);
    this.context.fill();
  }
}

export default Circle;
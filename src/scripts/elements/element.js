class Element{
  constructor(canvas){
    this.canvas = canvas;
    this.color = 'rgba(200, 200, 200, 1)';
    this.posX = this.getRandom(450);
    this.posY = this.getRandom(450);

    this.maxWidth = this.canvas.width;
    this.maxHeight = this.canvas.height;
  }

  getRandom(num){
    return Math.floor(Math.random() * num);
  }

  confirmMax(){
    this.maxWidth = this.canvas.width;
    this.maxHeight = this.canvas.height;
  }
};

export default Element;
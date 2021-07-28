class Alteration{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.image = new Image();

    this.color = 'rgba(200, 200, 200, 1)';
    this.posX = this.getRandom(450);
    this.posY = this.getRandom(450);

    this.size = 40;
    this.width = this.size;
    this.height = this.size;
  }

  getRandom(num){
    return Math.floor(Math.random() * num);
  }
};

export default Alteration;
class Alteration{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.image = new Image();

    this.color = 'rgba(200, 200, 200, 1)';
    this.posX = this.canvas.width / 2;
    this.posY = this.canvas.height;

    this.size = 40;
    this.width = this.size;
    this.height = this.size;

    this.creationFrameCount = 0;
    this.finishFrames = this.canvas.height / 2;
  }

  getRandom(num){
    return Math.floor(Math.random() * num);
  }

  creationAnimation(){
    if(this.creationFrameCount < this.finishFrames){
      this.posY--;
      this.creationFrameCount++;
    }
  }
};

export default Alteration;
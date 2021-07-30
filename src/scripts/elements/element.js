class Element{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    
    this.maxWidth = this.canvas.width;
    this.maxHeight = this.canvas.height;

    this.posX = this.maxWidth / 2;
    this.posY = this.maxHeight;
    this.angle = 0; // degree

    this.alterations = [];

    this.creationFrameCount = 0;
    this.finishFrames = this.maxHeight / 2;
  }
  
  _resetToDefault(){
    this.color = 'rgba(200, 200, 200, 1)';
    this.size = 60;
    this.offsetX = 0;
    this.offsetY = 0;
    this.offsetAngle = 0;
  }

  getRandom(num){
    return Math.floor(Math.random() * num);
  }

  confirmMax(){
    this.maxWidth = this.canvas.width;
    this.maxHeight = this.canvas.height;
  }

  addAlteration(alteration){
    this.creationFrameCount = this.finishFrames;
    this.alterations.push(alteration);
    alteration.morphElement(this);
  }

  creationAnimation(){
    if(this.creationFrameCount < this.finishFrames){
      this.posY--;
      this.creationFrameCount++;
    }
  }

  update(){
    if(this.alterations.length > 0){
      for(const alteration of this.alterations){
        alteration.update(this);
      }
    }else{
      this._resetToDefault();
      this.creationAnimation();
    }
  }
};

export default Element;
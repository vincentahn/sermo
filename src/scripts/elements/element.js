class Element{
  constructor(canvas){
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.posX = this.getRandom(450);
    this.posY = this.getRandom(450);
    
    this.maxWidth = this.canvas.width;
    this.maxHeight = this.canvas.height;

    this.alterations = [];
  }
  
  _resetToDefault(){
    this.color = 'rgba(200, 200, 200, 1)';
    this.size = 60;
    this.offsetX = 0;
    this.offsetY = 0;
    this.angle = 0; // degree
  }

  getRandom(num){
    return Math.floor(Math.random() * num);
  }

  confirmMax(){
    this.maxWidth = this.canvas.width;
    this.maxHeight = this.canvas.height;
  }

  addAlteration(alteration){
    this.alterations.push(alteration);
    alteration.morphElement(this);
  }

  update(){
    if(this.alterations.length > 0){
      for(const alteration of this.alterations){
        alteration.update(this);
      }
    }else{
      this._resetToDefault();
    }
  }
};

export default Element;
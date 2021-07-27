class Clock{
  constructor(hook, environment){
    this.hook = hook;
    this.environment = environment;
    this.context = this.hook.getContext('2d');

    this.hook.width = 400;
    this.hook.height = 400;
    this.scaleFactor = this.hook.width / 20;
    this.hook.style.width = "20px";
    this.hook.style.height = "20px";

    this.radius = 9;
    this.color = 'rgba(200, 200, 200, 1)';
    this.posX = this.hook.width / (2 * this.scaleFactor);
    this.posY = this.hook.height / (2 * this.scaleFactor);
    this.hourAngle = 0;
    this.minuteAngle = 0;
    this.lineWidth = this.radius * 0.1;
    this.minuteLength = this.radius - 1;
    this.hourLength = this.minuteLength / 2;

    this.environment.addClock(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
    this.hook.addEventListener("click", this.toggleAnimation);

    this.render();
  }

  updateTime(){
    this.hourAngle++;
    this.minuteAngle++;
  }

  clearCanvas(){
    this.context.save();
    this.context.clearRect(0, 0, this.hook.width, this.hook.height);
    this.context.restore();
  }

  drawBorder(){
    this.context.save();

    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.scale(this.scaleFactor, this.scaleFactor);

    this.context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    this.context.stroke();

    this.context.restore();
  }
  
  drawHourHand(){
    this.context.save();

    this.context.beginPath();
    this.context.strokeStyle = this.color;
    this.context.scale(this.scaleFactor, this.scaleFactor);

    this.context.lineWidth = this.lineWidth;
    this.context.lineCap = "round";
    this.context.translate(this.posX, this.posY);
    this.context.moveTo(0, 0);
    this.context.rotate(this.hourAngle * Math.PI / (180 * 60));
    this.context.lineTo(0, this.hourLength);
    this.context.stroke();

    this.context.restore();
  }

  drawMinuteHand(){
    this.context.save();

    this.context.beginPath();
    this.context.scale(this.scaleFactor, this.scaleFactor);
    this.context.strokeStyle = this.color;
    this.context.lineWidth = this.lineWidth;
    this.context.lineCap = "round";
    this.context.translate(this.posX, this.posY);
    this.context.moveTo(0, 0);
    this.context.rotate(this.minuteAngle * Math.PI / 180);
    this.context.lineTo(0, this.minuteLength);
    this.context.stroke();

    this.context.restore();
  }

  render(){
    this.updateTime();

    this.clearCanvas();
    this.drawBorder();
    this.drawHourHand();
    this.drawMinuteHand();
  }

  toggleAnimation(){
    this.environment.toggleAnimation();
  }
};

export default Clock;
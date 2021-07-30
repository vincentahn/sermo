class Reset{
  constructor(hook, environment){
    this.hook = hook;
    this.environment = environment;

    this.handleReset = this.handleReset.bind(this);
    this.hook.addEventListener("click", this.handleReset);
  }

  handleReset(e){
    this.environment.reset();
  }
};

export default Reset;
class Environment{
  constructor(hook){
    this.hook = hook;
    this.elements = [];
  }

  insertElement(element){
    this.elements.push(element);
    this.hook.appendChild(element.hook);
    console.log("Element appended");
  }

  run(){
    console.log(this.hook);
    console.log("Game is running");
  }
}

export default Environment;
class Element{
  constructor(){
    this.hook = document.createElement('canvas');
    this.hook.classList.add('environment-element');

    this.color = 'rgba(200, 200, 200, 1)';
  }
};

export default Element;
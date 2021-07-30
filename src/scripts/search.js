import ActionList from "./actions";

class Search{
  constructor(hook, environment){
    this.hook = hook;
    this.value = '';

    this.actionList = new ActionList(environment);
    this.elementList = Object.keys(this.actionList.elementList);
    this.alterationList = Object.keys(this.actionList.alterationList);

    this.environment = environment;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.hook.addEventListener('input', this.handleChange);
    this.hook.addEventListener('keyup', this.handleSubmit);
  }

  handleChange(){
    this.value = this.hook.value;

    if (this.environment.alteration && this.alterationList.includes(this.value)){
      this.hook.classList.add('reject-input');
    }else if(this.elementList.includes(this.value) || this.alterationList.includes(this.value)){
      this.hook.classList.add('matching-input');
    }else{
      this.hook.classList.remove('matching-input', 'reject-input');
    }
  }

  handleSubmit(e){
    if(e.code === 'Enter'){
      if (this.elementList.includes(this.value)){
        this.actionList.create(this.value);
      }
      else if(this.alterationList.includes(this.value) && !this.environment.alteration){
        this.actionList.alter(this.value);
      }
    }
  }
};

export default Search;
import ActionList from "./actions";
import Circle from "./elements/circle";

class Search{
  constructor(hook, environment){
    this.hook = hook;
    this.value = '';

    this.actionlist = new ActionList(environment);
    this.list = Object.keys(this.actionlist.list);

    this.environment = environment;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.hook.addEventListener('input', this.handleChange);
    this.hook.addEventListener('keyup', this.handleSubmit);
  }

  handleChange(){
    this.value = this.hook.value;
  }

  handleSubmit(e){
    if (e.code === 'Enter' && this.list.includes(this.value)){
      this.actionlist.act(this.value);
    }
  }
};

export default Search;
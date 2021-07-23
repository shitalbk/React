import React, {Component} from 'react';

class Application extends Component{
  constructor(props){
    super(props);
  
  this.state = {
    count: 0
    }
  }

  handleClick = () =>{
      this.setState({count: this.state.count + 1});
  }

  render(){
    let {count} = this.state;
    let name = "Shital";  
    return(
      <div>
        <h1>You clicked the button {count} times {name}!!!</h1>
        <span>
          <button onClick = {(e) => this.handleClick()}>Click Me</button>
        </span>
      </div>
      
    );
  }
}

export default Application; 

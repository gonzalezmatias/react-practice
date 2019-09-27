import React, {Component} from 'react';
import Ninja from './ninjas'

class App extends Component{

  state = {
    name:'Ringo',
    age: 23
  }

  changeName = (e) =>{
    this.setState({
      name:'Paul'
    })
    console.log(e.pageX);
  }

  render(){
    return(
      <div className="App">
        <h1>testing {this.state.age + 4}</h1>
        <Ninja/>
        <h3>componente nija arriba {this.state.name}</h3>
        <button onClick={this.changeName}>Click me</button>
      </div>
    )
  }
}
export default App;

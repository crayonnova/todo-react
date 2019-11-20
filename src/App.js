import React from 'react';

import {Input} from './components/Input.component'
import {TaskList} from './components/TaskList.component'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      text : '',
      list  : []
    }
  }
  inputHandle = (e) => {
    this.setState({text : e.target.value})
  }

  submitHandle = () => {
    const jointed = this.state.list.concat(this.state.text)
    this.setState({list:jointed})
    console.log(this.state);
  }
  render(){
  return (
    <div>
      <h1> Todo app</h1>
      <Input type='text' placeholder='eg. go to work' action={this.inputHandle}/>
      <Input type='submit' submit={this.submitHandle}/>
      <TaskList tasks={this.state.list}/>
    </div>
  );
}
}

export default App;

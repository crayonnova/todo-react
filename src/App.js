import React from 'react';
// import {SearchBox,Button} from './SearchBox.components'
import {UserList} from './List/UserList.component'
import './App.css';

class App extends React.Component {
  constructor(){
    super() 
    this.state = {
      users : []
    }
  }
  componentDidMount() {
    fetch(`https://api.github.com/users`)
    .then(response => response.json())
    .then(users => this.setState({users: users}))
  }
  
  render(){
  
  return (
    <div className='App'>
      <UserList users={this.state.users}></UserList>
    </div>
  );
}
}


export default App;

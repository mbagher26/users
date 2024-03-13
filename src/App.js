import './App.css';
import React, { Component } from 'react'
import User from './user/User';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users:[
        {id:1, name: 'Siavash'},
        {id:2, name: 'Dariyoush'},
        {id:3, name: 'moin'},
       ]
    }
    this.removeHandler = this.removeHandler.bind(this)
  }

  removeHandler(userId){

    let newUser = [...this.state.users]

    let mainUserIndex = newUser.findIndex((user) => {
            
      return user.id === userId 
    })

          newUser.splice(mainUserIndex, 1)
    this.setState({
      users: newUser
    })
  }
  
  render() {
    return (
      <div>
          {this.state.users.map(user =>(
            <User key={user.id} {...user} onRemove={this.removeHandler}/>
          ))}
      </div>
    )
  }
}


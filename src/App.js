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
  }

  removeHandler(userId){
    console.log(userId)
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


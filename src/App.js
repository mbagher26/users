import './App.css';
import React, { Component } from 'react'

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
  
  render() {
    return (
      <div>
        
      </div>
    )
  }
}


import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1> <button onClick={this.removeMethod.bind(this, this.props.id)}></button>
            </div>
        )
    }
}



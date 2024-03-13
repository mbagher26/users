import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    removeMethod(id){
        this.props.onRemove(id);
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name} 
                    <button onClick={this.removeMethod.bind(this, this.props.id)}>Remove</button>
                </h1> 
            </div>
        )
    }
}



import React, { Component } from 'react'
import './02-style.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = { in1: "", in2: "", total: "" }
    }

    exe1(){
        console.log("Hello from exe1()");
        console.log( this.state );
        
        this.setState({ total: parseInt(this.state.in1, 0) + parseInt(this.state.in2, 0) })
    }

    render(){
        return(
            <div>

                <h1>Add Numbers App</h1>

                <input type="text" value={ this.state.in1 } onChange={ (eve) => { this.setState({ in1: eve.target.value }) } }/>
                <br/><br/>

                <input type="text" value={ this.state.in2 } onChange={ (eve) => { this.setState({ in2: eve.target.value }) } }/>
                <br/><br/>

                <input type="button" onClick={ this.exe1.bind(this) } value="Add Numbers"/>
                <br/><br/>

                <input type="text" value={ this.state.total } />

            </div>
        )
    }
}

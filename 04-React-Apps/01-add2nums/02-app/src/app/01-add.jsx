import React, { Component } from 'react'
import './02-style.css'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = { num1: '', num2: '', total: '' }
    }

    exe1(){
        console.log(`Num1: ${this.state.num1} -- Num2: ${this.state.num2}`)
        this.setState({ total: parseInt(this.state.num1, 0) + parseInt(this.state.num2, 0) })
    }

    render(){
        return(
            <div>
                <h1>Add 2 Numbers</h1>

                <input type="text" value={ this.state.num1 } onChange={ (event) => { this.setState({ num1: event.target.value }) } } />
                <br/><br/>

                <input type="text" value={ this.state.num2 } onChange={ (event) => { this.setState({ num2: event.target.value }) } } />
                <br/><br/>

                <button onClick={ () => { this.exe1() } } >Add Numbers</button>
                <br/><br/>

                <input type="text" value={ this.state.total }/>
            </div>
        )
    }
}
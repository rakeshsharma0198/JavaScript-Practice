import React from 'react'
import './style.css'

export default class extends React.Component{

    constructor(props){
        super(props)
        this.state = { in1: '', in2: '', total: '' }
    }

    add2Nums(){
        console.log(this.state)
        this.setState({ total: parseInt( this.state.in1 , 0) + parseInt( this.state.in2 , 0) })
    }

    render(){

        return(
            <div>
                <h1>Add Numbers</h1>

                <input type="text" value={ this.state.in1 } onChange={ ( e ) => { this.setState({ in1: e.target.value }) } } />
                <br/><br/>

                <input type="text" value={ this.state.in2 } onChange={ ( e ) => { this.setState({ in2: e.target.value }) } }/>
                <br/><br/>

                <input type="submit" value="Add Nums" onClick={ this.add2Nums.bind(this) } />
                <br/><br/>

                <input type="text" value={ this.state.total }/>
            </div>
        )
    }
}
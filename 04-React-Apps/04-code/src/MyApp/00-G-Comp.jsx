import React from 'react'
import './style.css'

export default class extends React.Component{
    state = { num1: 'Pegasus' }

    exe1(){
        console.log(this.state)
        
    }

    render(){
        return(
            <div>

               <h1>React.js Practice</h1>

               <input className="g-in input1"   type="text"/>
               <br/><br/>

                <input className="g-in input1"   type="text"/>
                <br/><br/>

                <input type="submit" onClick={ this.exe1.bind(this) } />
                <br/><br/>

                <input className="g-in input2"   type="text"/>

            </div>
        )
    }
}
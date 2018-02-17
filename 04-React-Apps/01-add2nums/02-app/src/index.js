import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MainComp from './app/00-Main.jsx'

class IndexComp extends Component{
    render(){
        return(
            <div>
                <MainComp/>
            </div>
        )
    }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))


import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MyComp from './MyComp'

class IndexComp extends Component{
    render(){
        return(
            <div>
                <MyComp />
            </div>
        )
    }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))
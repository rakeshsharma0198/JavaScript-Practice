import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App/01-math'

class IndexComp extends Component {
    render(){
        return(
            <div> 
                <App/>
            </div>
        )
    }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))
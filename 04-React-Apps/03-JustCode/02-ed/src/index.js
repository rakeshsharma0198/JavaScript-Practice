import React from 'react'
import ReactDOM from 'react-dom'

import MyApp from './App'

class IndesCom extends React.Component{
    render(){
        return(
            <div>
                <MyApp />
            </div>
        )
    }
}

ReactDOM.render(<IndesCom />, document.getElementById('root'))


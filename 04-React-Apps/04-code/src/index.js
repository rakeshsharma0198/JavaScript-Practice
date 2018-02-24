import React from 'react'
import ReactDOM from 'react-dom'

import GComp from './MyApp/00-G-Comp'

class IndexComp extends React.Component {
    render(){
        return(
            <div>
                    <GComp />    
            </div>
        )
    }
}

ReactDOM.render(<IndexComp />, document.getElementById('root'))
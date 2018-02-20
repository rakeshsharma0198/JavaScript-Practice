import React from 'react'
import ReactDOM from 'react-dom'

import Morning from './Ed/AddNums.jsx'

class IndexComp extends React.Component{
    render(){
        return(
            <div>
                <Morning />
                
                
            </div>
        )
    }
}

ReactDOM.render( <IndexComp />, document.getElementById('root') )

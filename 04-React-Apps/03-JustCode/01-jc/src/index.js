import React from 'react'
import ReactDOM from 'react-dom'

import AddNums from './MyApp/01-Add'


class IndexComp extends React.Component{
    render(){
        return(
            <div>
                <AddNums />
            </div>
        )
    }

}


ReactDOM.render(<IndexComp />, document.getElementById('root'))





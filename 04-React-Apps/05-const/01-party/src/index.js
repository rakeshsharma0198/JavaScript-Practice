import React from 'react'
import ReactDOM from 'react-dom'
import GaComp from './MyApp/01-Gather'

class IndexComp extends React.Component{
    render(){
        return(
            <div>
                <GaComp/>
            </div>
        )
    }
}

ReactDOM.render(<IndexComp/>, document.getElementById('root'))
import React from 'react'
import './style.css'

export default class AddNums extends React.Component {


    render(){
        return(
            <div>
                <h1>Add Two Numbers</h1>

                 <input className="chicken" type="text" />
                <br/><br/>

                <input className="chicken" type="text" />
                <br/><br/>

                <input type="submit" value="Add Numbs" />
                <br/><br/>

                <input className="sum-output" type="text"/>
            </div>
        )
    }
}


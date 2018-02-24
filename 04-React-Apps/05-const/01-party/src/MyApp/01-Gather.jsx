import React from 'react'
import './02-style.css'

export default class extends React.Component{
    render(){
        return(
            <div id="main-cont">

                <h1>Event Registration</h1>
                <p>Dont miss the event of the YEAR....</p>


                <div id="form-1">

                    <input type="text" />
                    <br/><br/>

                    <input type="text"/>
                    <br/><br/>

                    <input type="text"/>
                    <br/><br/>

                    <input type="text"/>
                    <br/><br/>

                    <p>To RSVP please fill the fomr below</p>

                </div>

            </div>
        )
    }
}
import React, { Component } from 'react'
import './style.css'

import Potato from 'react-icons/lib/fa/html5'
import GitIcon from 'react-icons/lib/go/mark-github'


export default class extends Component{
    render(){
        
        return(
            <div>

                <h1>Examples of Icons in React.js</h1>
                <p>Exaple</p>

                
                <a href="www.mycode.website" target="_blank"><Potato id="potato" /></a>
                    <br/><br/>

                <GitIcon id="potato" />

            </div>
        )
    }
}
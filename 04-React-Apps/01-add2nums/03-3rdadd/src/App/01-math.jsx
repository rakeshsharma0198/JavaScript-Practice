import React, { Component } from 'react'
import './02-style.css'

import GitIcon from 'react-icons/lib/fa/git-square'
import Folder from 'react-icons/lib/fa/folder-open'

export default class extends Component{
    constructor(props){
        super(props)
        this.state = { in1: "", in2: "", total: "" }
    }

    exe1(){
        console.log("Hello from exe1()");
        console.log( this.state );
        
        this.setState({ total: parseInt(this.state.in1, 0) + parseInt(this.state.in2, 0) })
    }

    render(){
        return(
            <div>

                <div id="appCont">
                    <h1>Add Numbers App</h1>

                    <input class="gralInput" type="text" value={ this.state.in1 } onChange={ (eve) => { this.setState({ in1: eve.target.value }) } }/>
                    <br/><br/>

                    <input class="gralInput" type="text" value={ this.state.in2 } onChange={ (eve) => { this.setState({ in2: eve.target.value }) } }/>
                    <br/><br/>

                    <input type="button" onClick={ this.exe1.bind(this) } value="Add Numbers"/>
                    <br/><br/>

                    <input class="gralInput ansInp" type="text" value={ this.state.total } />
                    <br/><br/>
               </div>

               <div class="myFooter"> 
                    <div class="footerElement footerText" >App by: Edmundo Rubio </div>
                    <a class="footerElement myIcons"  href="http://blog.mycode.website/" target="_blank"> <GitIcon/> </a>
                    <a class="footerElement myIcons"  href="https://www.mycode.website/" target="_blank"> <Folder/> </a>
                </div>

            </div>
        )
    }
}

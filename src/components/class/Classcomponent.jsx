import React, {Component} from "react";
export default class Classcomponent extends Component
{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    apple(){
        this.setState({data:this.state.data+1})
    }
    render()
    {
        return(
           <div>
            <h1>hi from class component</h1>
            <h1>{this.state.data}</h1>
            <button onClick={()=>this.apple()}>update data</button>
           </div>
        )
    }
}
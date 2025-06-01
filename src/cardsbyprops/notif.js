import React, { Component } from "react";

class Notification extends Component{
     render(){
        return(<div>
            <h1>Notification</h1>
            <h3>this message is {this.props.type} by {this.props.name}</h3>
           
        </div>)
     }
}
export default Notification 
import React, { Component } from "react";

class Footercard extends Component{

    render(){
        return(<div>
           {this.props.children}
        </div>)
    }
    
}
export default Footercard 
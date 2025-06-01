import { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import { Table } from "./table";

class Main extends Component{
    render(){
        return(
        <div>
           <Header/>
           <Table/>
           <Footer/>
          
        </div>)
    }
}

export default Main;
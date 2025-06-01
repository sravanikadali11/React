import "./mbl.css"
import mobile from "./assets/images/mbl.avif"
import lap from "./assets/images/lap.jpeg"
import pods from "./assets/images/pods.jpeg"
import tab from "./assets/images/tab.jpeg"

import { Component } from "react";
const obj=[{mblname:"vivo",mblprice:30000,mblavailability:true},
             {lapname:"lenovo",lapprice:60000,lapavailability:false},
            {podsname:"apple",podsprice:15000,podsavailability:true},
        {tabname:"macbook",tabprice:40000,tabavailability:false}]

class Mbl extends Component{

      render(){
        return(
            <div className="main">
            <h1 className="mbl">
                <div className={obj[0].mblavailability?"available":"unavailable"}>
                  <h3> {obj[0].mblname}</h3>
                   <h6 >{obj[0].mblprice}</h6>
                    <img   src={mobile} alt="mobileimage" style={{height:"250px",marginBottom:"80px"}}/> 
                </div>
            </h1>
            <h1>
               <div className={obj[1].lapavailability?"available":"unavailable"}>
                <h3>{obj[1].lapname}</h3>
                <h6>{obj[1].lapprice}</h6>
                <img src={lap} alt="laptimage" />
                </div>
            </h1>
            <h1>
                <div className={obj[2].podsavailability?"available":"unavailable"}>
                    <h3>{obj[2].podsname}</h3>
                    <h6>{obj[2].podsprice}</h6>
                    <img src={pods} alt="podsimage"/>
                </div>
            </h1>
            <h1>
                <div className={obj[3].tabavailability?"available":"unavailable"}>
                    <h3>{obj[3].tabname}</h3>
                    <h6>{obj[3].tabprice}</h6>
                    <img src={tab} alt="tabimage"/>
                </div>
            </h1>
            
            </div>
        )
      }
}

export default Mbl
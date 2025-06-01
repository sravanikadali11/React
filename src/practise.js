
import "./practise.css"

import { Component } from "react";

let obj =[ {
  mobilename: "vivo",
  mobilecost: 10000,
  mobileavailability: true,
},
   {
    laptopname:"lenovo",
    laptopcost:50000,
    laptopavailability:false,

   }
];



class Practise extends Component {
  render() {
    return (
     <div className="main">
      <div  className = {obj[0].mobileavailability?"available":"unavailable"}>
        {obj[0].mobilename},
        {obj[0].mobilecost}
      </div>
      <div className={ obj[1].laptopavailability?"available":"unavailable"}>
     <h5>{obj[1].laptopname}
     </h5> ,{obj[1].laptopcost}
      </div>




     </div>
     
    );
  }
}
 
 


export default Practise;

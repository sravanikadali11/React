import React from "react";
import App from "./task1child";

function Parent(){
   

    return(
        <>
         <App name= {"sravani"}
               isOnline= {true}
               showDetails ={()=>{"hi sravani"} }/>
        
        </>
    )
}

export default Parent
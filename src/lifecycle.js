import React, {useEffect,useState} from "react";
 function Life(){
   const[count,setCount]=useState(0)

    useEffect(() => {
    console.log("⏰ Component Mounted");

    const interval = setInterval(() => {
      setCount(new count()); // updates time every second
    }, 1000);

   return ()=>{
    console.log("unmounted");
    clearInterval(interval)
   }
    }
)}
 export default Life;

 
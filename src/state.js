import React,{useState} from "react";

function State(){
    const[data, setCount]=useState(0)
    return(<>
         
         <h1>You clicked {data} times</h1>
          <button onClick={() => setCount(data+ 1)}>clickme</button>
    </>)
}
export default State
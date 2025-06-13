import React from "react";

function App(props) {
  return (
    <>
      <h2>usename:{props.name}</h2>
      <h3 style={{ color: props.isOnline ? "green" : "red" }}>
        status:{props.isOnline ? "online" : "offline"}
      </h3>
      <h2 style={{ color: props.isOnline ? "green" : "red" }}>
        status: {props.isOnline ? "online" : "offline"}
      </h2>
      <button onClick={props.showDetails}>showDetails</button>
    </>
  );
}
export default App;

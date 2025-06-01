import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import {Table} from './Table';
// import Main from './main'
// import Practise from './practise';
// import Mbl from './mbl';
// // import Destruct from './destruct';
// import Notification from './cardsbyprops/notif';
// import Profile from './cardsbyprops/profile';
import Footercard from "./cardsbyprops/footercard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Table/> */}
    {/* <Main/> */}
    {/* <Practise/> */}
    {/* <Mbl/> */}
    {/* <Destruct/> */}

    {/* <Notification type="liked" name="sravani"/>
     <Notification type="comment" name="yogi"/> 
     <Notification type="saved" name="ravlika"/>
     <Notification type=" download" name="preethi"/> */}
    {/* <Profile name="sravani" role="develpr" gender="female"/> */}

    <Footercard>
      <h1>mobile name</h1>
      <h2>mobile price</h2>
      <h3>jgd;uikdoih</h3>
    </Footercard>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

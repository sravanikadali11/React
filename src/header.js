import "./header.css"

import React from "react";
 
let Header= ()=>{
    return(
        <header>
    <div class="logo">MyWebsite</div>
    <nav class="navbar">
      <div class="nav-links">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
      <div class="menu-toggle" id="mobile-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
    )
}

export default Header
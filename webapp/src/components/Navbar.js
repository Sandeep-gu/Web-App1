import React from "react";
//IMPORTED CSS FILE NAVBAR.CSS
import "./Navbar.css";
function Navbar() {
  return (
    //CREATE NAVBAR WITH THE ADD SALES,TOP SALES,TODAY'S TOTAL, REVENUE,LOGIN,RESISTER,LOGOUT AND ADD GOOGLE FONT WITH CLASSNAME IS NAVBAR-TXT
    <div className="navbar-txt">
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
       
          <a class="navbar-brand fs-4 text-white" href="/">
            SALES APP
          </a>
        
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" href="/addsales">
                  ADD SALES
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link text-white" href="/topsales">
                  TOP SALES
                </a>
              </li>
               
              <li class="nav-item">
                <a class="nav-link text-white" href="/revenue">
                  TODDAY'S TOTAL REVENUE
                </a>
              </li>
                
              <li class="nav-item">
                <a class="nav-link text-white" href="/login">
                  LOGIN
                </a>
              </li>
               
              <li class="nav-item">
                <a class="nav-link text-white" href="/resister">
                  RESISTER
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link text-white" href="/">
                  LOGOUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

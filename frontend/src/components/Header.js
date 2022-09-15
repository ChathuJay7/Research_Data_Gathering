import React, { useState } from 'react';

import { Link, NavLink } from "react-router-dom";
import "./Style.css";


function Header() {

    const [value, setValue] = useState();

  return(

<div class="card text-center" >
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item" >
        <NavLink className="nav-link" to={"/"}>Home</NavLink>
      </li>
      <li class="nav-item" >
        <NavLink className="nav-link" to={"/patients"}>Patients</NavLink>
      </li>
      <li class="nav-item" >
        <NavLink className="nav-link" to={"/add"}>Add Patient</NavLink>
      </li>
      <li class="nav-item" >
        <NavLink className="nav-link" to={"/about"} >About Us</NavLink>
      </li>
      
    </ul>
  </div>
  
</div>


  ) 



}

export default Header
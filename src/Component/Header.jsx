import React from "react";
import './Header.css'
import { Link } from "react-router-dom";



function Header() {
  return (
    <div>
    <div className="header-top">
     <Link to='/crud/' style={{color:"black" , textDecoration:"none" , cursor:"pointer"}}>
      <p>CRUD OPERATION</p>
     </Link>
    <Link to='/crud/create'>
      <p style={{textDecoration:"underline"  , cursor:"pointer" , textDecorationColor:"green"}}>CREATE DATA</p>
    </Link>
    </div>

  
    </div>
  );
}

export default Header;

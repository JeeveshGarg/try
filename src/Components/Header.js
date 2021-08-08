import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import logo from './m.png';
import logoo from './m2.png';
import "../App.css";
function Header() {

    return (
        <div>
            <ReactBootStrap.Container>
  <ReactBootStrap.Row>
    <ReactBootStrap.Col xs={5}>
        <h1 style={{fontWeight:"700"}} className="headh">Lit up your</h1>
        <h1 style={{fontWeight:"700"}} className="headh"> online <span style={{color:"#EB0090"}}>date.</span>
        </h1>
        <p  className="headp" style={{paddingTop:"15px"}}>Turn your online couple meeting of couples into a playfuk date.  Free of boredom, & awkward pauses with intriguing converations & fun engagement.</p>
        <a><ReactBootStrap.Button variant="primary"  className="navbtn">MAKE IT HAPPEN! </ReactBootStrap.Button> </a><img src={logoo} alt="Logo"  className="navbtn" />
    </ReactBootStrap.Col>
    <ReactBootStrap.Col xs={7}>
    <img src={logo} alt="Logo" />
    </ReactBootStrap.Col>
  </ReactBootStrap.Row>
</ReactBootStrap.Container>
        </div>
    )
}

export default Header

import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logo from './n.png';
import "../App.css";
function Navbar() {
  return (
    <div>
      <ReactBootStrap.Navbar className="bg-dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            Candid Connections
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="me-auto" style={{marginRight:"326px"}}>
            <ReactBootStrap.Nav.Link href="#home"  id ="home"  style={{margin:"10px", marginRight:"25px", marginLeft:"55%", color:"grey"}}>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features" style={{margin:"10px", marginRight:"25px",  color:"grey"}}>
              Features
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing" style={{margin:"10px", marginRight:"25px", color:"grey"}}>
              Testimonials
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#pricing" style={{margin:"10px", marginRight:"25px", color:"grey"}}>
              Contact
            </ReactBootStrap.Nav.Link>
            <img style={{margin:"20px", width:"25px",height:"25px"}} src={logo} alt="Logo" />
            <ReactBootStrap.Button variant="primary" style={{height:"40px!important", background:"white !important"}}>
              Get started
            </ReactBootStrap.Button>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>


    </div>
    
  );
}

export default Navbar;

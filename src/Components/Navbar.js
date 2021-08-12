import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logoo from './Logos.png';
import logo from './n.png';
import "../App.css";
function Navbar() {



  function myFunction() {
    var element = document.Navbar;
    element.classList.toggle("dark");
    }
     

  return (
    <div id="Home">
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container >
  <img className="navimg" src={logoo} alt="Logo"/>
  <ReactBootStrap.Navbar.Brand href="#home" className="navbrand">Candid Connections</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav targetOffset="65px">
      <ReactBootStrap.Nav.Link href="#Home" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Card" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Features</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Testimonial" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Testimonials</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Contact" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Contact</ReactBootStrap.Nav.Link>
      <button onclick="myFunction()" style={{borderRadius:"50%" , height:"50px", width:"50px", display: "contents"}}><img   style={{margin:"20px", width:"25px",height:"25px", background:"white" ,borderRadius:"50%"}} src={logo} alt="Logo"/></button>
      <ReactBootStrap.Button variant="primary" className="btnnav" style={{height:"40px!important", background:"white !important"}}>
              Get started
      </ReactBootStrap.Button>
      {/* <ReactBootStrap.Nav.Link eventKey={2} href="#memes">Dank memes </ReactBootStrap.Nav.Link> */}
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>

    </div>
    
  );
}

export default Navbar;

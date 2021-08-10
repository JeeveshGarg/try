import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logoo from './Logos.png';
import logo from './n.png';
import "../App.css";
function Navbar() {
  return (
    <div>
      {/* <ReactBootStrap.Navbar className="bg-dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            Candid Connections
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Nav className="me-auto" style={{marginRight:"326px"}}>
            <ReactBootStrap.Nav.Link href="#home"  id ="home"  style={{margin:"10px", marginRight:"25px", marginLeft:"55%", color:"grey"}}>Home</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#features" style={{margin:"10px", marginRight:"25px",  color:"grey"}}>
             Features
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Testimonial" style={{margin:"10px", marginRight:"25px", color:"grey"}}>
              Testimonials
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#Contact" style={{margin:"10px", marginRight:"25px", color:"grey"}}>
              Contact
            </ReactBootStrap.Nav.Link>
            <img  src={logo} alt="Logo" />
            <ReactBootStrap.Button variant="primary" className="btnnav" style={{height:"40px!important", background:"white !important"}}>
              Get started
            </ReactBootStrap.Button>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar> */}
<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <img style={{height:"40px"}} src={logoo} alt="Logo"/>
  <ReactBootStrap.Navbar.Brand href="#home">Candid Connections</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      {/* <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link> */}
      {/* <ReactBootStrap.Nav.Link href="#pricing">Pricing</ReactBootStrap.Nav.Link> */}
      {/* <ReactBootStrap.NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="#deets" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#deets" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Features</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#deets" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Testimonials</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#deets" style={{margin:"10px", marginRight:"25px", color:"grey"}}>Contact</ReactBootStrap.Nav.Link>
      <img style={{margin:"20px", width:"25px",height:"25px", background:"white" ,borderRadius:"50%"}} src={logo} alt="Logo"/>
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

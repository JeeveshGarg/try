import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logoo from "./Logos.png";
import Button from "../Components/Button";
import "../App.css";
function Navbar() {
  return (
    <div id="Home">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Container>
          <img className="navimg" src={logoo} alt="Logo" />
          <ReactBootStrap.Navbar.Brand href="#home" className="navbrand">
            Candid Connections
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav targetOffset="65px">
              <ReactBootStrap.Nav.Link href="#Home" className="navitems"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className="navitems"
                href="#Card"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Features
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className="navitems"
                href="#Testimonial"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                What People Say
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className="navitems"
                href="#Contact"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Contact Us
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link >
               <button className="nav__btn"><Button >Get Access</Button></button>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;

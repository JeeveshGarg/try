import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logoo from "./Logos.png";
import logo from "./n.png";
import Form from "../Components/Form";
import Button from "../Components/Button";
import "../App.css";
import { useState } from "react";
function Navbar() {
  const [popup, setpopup] = useState(false);
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
              <ReactBootStrap.Nav.Link
                href="#Home"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                href="#Card"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Features
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                href="#Testimonial"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                What People Say
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link
                href="#Contact"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Contact Us
              </ReactBootStrap.Nav.Link>
              <button
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  display: "contents",
                }}
              >
                <img
                  style={{
                    margin: "20px",
                    width: "25px",
                    height: "25px",
                    background: "white",
                    borderRadius: "50%",
                  }}
                  src={logo}
                  alt="Logo"
                />
              </button>
              {/* <ReactBootStrap.Button
                variant="primary"
                className="btnnav"
                style={{
                  height: "40px!important",
                  background: "white !important",
                }}
                onClick={() => setpopup(true)}
              >
                Get started
              </ReactBootStrap.Button> */}
              {/* <button data-tf-popup="AdHfxkOD" className="btnnav">Get started</button>
               */}
              <Button>Get Started</Button>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
      <Form trigger={popup} setTrigger={setpopup}>
        <iframe
          style={{ width: "600px", height: "500px" }}
          src="https://cdn.forms-content.sg-form.com/8ab332a3-fab5-11eb-bf25-863f55bc68b6"
        />
      </Form>
    </div>
  );
}

export default Navbar;

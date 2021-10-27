import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import logoo from "./Logos.png";
import Button from "../Components/Button";
import "../App.css";
import logo from "./n.png";
import {useAuth} from './../hooks/use-auth'
function Navbar(props) {
   const auth = useAuth()
  
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
          {/* <button className = "text-white" onClick = {()=>auth.signout()}>Sign Out</button> */}
          <ReactBootStrap.Navbar.Brand href="/#home" className="navbrand">
            Candid Connections
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav targetOffset="65px">
              <ReactBootStrap.Nav.Link href="/#Home" className="navitems"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className="navitems"
                href="/test"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Take Test
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className="navitems"
                href="/Date"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                Candid Date
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link className="navitems"
                href="/#Testimonial"
                style={{ margin: "10px", marginRight: "25px", color: "grey" }}
              >
                What People Say
              </ReactBootStrap.Nav.Link>
             
              <ReactBootStrap.Nav.Link >
              <button onClick={props.check}
                style={{
                  borderRadius: "50%",
                  height: "50px",
                  width: "50px",
                  display: "contents",
                }}
              >
                <img onClick={props.check}
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
               <button  className="nav__btn"><Button >Get Started</Button></button>
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}

export default Navbar;

import React from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import * as ReactBootStrap from "react-bootstrap";
import logo from "./m.svg";
import "../App.css";
import Button from "../Components/Button";
function Header(props) {
  useEffect(() =>{
    AOS.init();
  })
  return (
    <ReactBootStrap.Container >
      <ReactBootStrap.Row className="header__box">
        <ReactBootStrap.Col  className="header__text">
          
          <div className="header__content ml-4" data-aos='fade-up'>
            <h1 style={{ fontWeight: "700" }} style={props.dark ? {color:"white"}: {color:"#000000"}} className="headh">
              Lit up your<br/>
              virtual <span style={{ color: "#EB0090" }}>dates.</span>
            </h1>
            <p className="headp" style={props.dark ? {color:"white"}: {color:"#000000"}}  >
              Turn your online couple meeting into a playful date. Free of
              boredom, & awkward pauses with intriguing conversations & fun
              engagement.
            </p>
            <div className="header__button">
            <button
                // onClick  = {()=> props.setShowSignInModal(true)}
                data-tf-popup="Hm611Yua"
                style={{
                  all: "unset",
                  fontFamily: "Helvetica,Arial,sans-serif",
                  display: "inline-block",
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  backgroundColor: "#EB0090",
                  color: "#FFFFFF",
                  fontSize: "20px",
                  borderRadius: "7px",
                  padding: "0 33px",
                  fontWeight: "bold",
                  height: "50px",
                  cursor: "pointer",
                  lineHeight: "50px",
                  textAlign: "center",
                  margin: 0,
                  textDecoration: "none",
                }}
              >
                Join the Waitlist!
              </button>{" "}
              </div>
          </div>
          
        </ReactBootStrap.Col>
        <ReactBootStrap.Col  className="header__image">
         <div className="header__img" data-aos='fade-up'><img src={logo} alt="Logo" /></div> 
        </ReactBootStrap.Col>
      </ReactBootStrap.Row>
    </ReactBootStrap.Container>
  );
}

export default Header;
